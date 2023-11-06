import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class BillDetail extends Model {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    billId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
    })
    quantity: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: number;
}
