import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';
import { BillModule } from './bill/bill.module';
import { BillDetailModule } from './bill-detail/bill-detail.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { BrandModule } from './brand/brand.module';
import { RatingModule } from './rating/rating.module';
import { MailModule } from './mail/mail.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        MailerModule.forRoot({
            transport: 'smtps://user@domain.com:pass@smtp.domain.com',
        }),
        CategoryModule,
        UserModule,
        ProductModule,
        BlogModule,
        BillModule,
        BillDetailModule,
        CommentModule,
        AuthModule,
        WishlistModule,
        BrandModule,
        RatingModule,
        MailModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
