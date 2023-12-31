import { Inject, Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
import { RatingDto } from './dto/rating.dto';
import { Sequelize } from 'sequelize';
import { fn, col } from 'sequelize';

@Injectable()
export class RatingService {
    constructor(
        @Inject('RATING_REPOSITORY')
        private ratingRepository: typeof Rating,

    ) { }

    async countRating(idProduct: number) {
        const count = await this.ratingRepository.count({
            where: {
                productId: idProduct
            }
        });

        return count;
    }

    async addScore(ratingDto: CreateRatingDto) {
        const record = await this.ratingRepository.findOne<Rating>({
            where: {
                userId: ratingDto.userId,
                productId: ratingDto.productId
            },
        });

        if (record) {
            record.score = ratingDto.score;
            await record.save();

            return record.score;
        }

        const created = await this.ratingRepository.create({
            userId: ratingDto.userId,
            productId: ratingDto.productId,
            score: ratingDto.score,
        });

        const retData = await created.save();

        return new RatingDto(retData);
    }

    async getScore(idProduct: number) {
        const ratings = await this.ratingRepository.findAll({
            where: { productId: idProduct },
            attributes: [[Sequelize.fn('AVG', Sequelize.col('score')), 'averageScore']],
            raw: true,
        }) as any[];

        if (!ratings || ratings.length <= 0) {
            return 0;
        }

        return ratings[0].averageScore;
    }

    async findBestRating(limit: number) {
        const products = await this.ratingRepository.findAll({
            attributes: ['productId', [fn('AVG', col('score')), 'averageScore']],
            group: ['productId'],
            order: [[fn('AVG', col('score')), 'DESC']],
            limit: limit,
            raw: true,
        });

        return products;
    }
}
