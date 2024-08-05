// models/Purchase.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user';
import { Order } from './order';

@Table({
  tableName:"Purchase"
})
export class Purchase extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING
  })
  purchaseId!: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING)
  userId!: string;

  @ForeignKey(() => Order)
  @Column(DataType.STRING)
  orderId!: string;

  @Column(DataType.STRING)
  paymentToken!:string

  @Column(DataType.DATE)
  purchaseDate!: Date;

  @Column({type: DataType.DATE,defaultValue: DataType.NOW})
  createdAt!: Date;

  @Column({type: DataType.DATE,defaultValue: DataType.NOW})
  updatedAt!: Date;
  
  @BelongsTo(() => User)
  user?: User;

  @BelongsTo(() => Order)
  order?: Order;

}