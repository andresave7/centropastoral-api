// models/Order.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user';
import { Purchase } from '../models';

@Table({
  tableName:"Order"
})
export class Order extends Model<Order> {
  @Column({
    primaryKey: true,
    type: DataType.STRING
  })
  orderId!: string;

  @Column(DataType.DATE)
  orderDate!: Date;

  @Column(DataType.DECIMAL)
  tax!: Number;

  @Column(DataType.DECIMAL)
  total!: Number;

  @ForeignKey(() => User)
  @Column(DataType.STRING)
  userId!: string;

  @ForeignKey(() => Purchase)
  @Column(DataType.STRING)
  purchaseId!: string;

  @Column( DataType.STRING)
  paymentToken!: string;

  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;

  @BelongsTo(() => User)
  user?: User;

  @BelongsTo(() => Purchase)
  purchase?: Purchase;

}
