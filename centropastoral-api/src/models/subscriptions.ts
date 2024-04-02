import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName:"Subscription"
})
export class Subscription extends Model<Subscription> {
  @Column({
    type: DataType.STRING,
    primaryKey: true
  })
  subscriptionId!: string;

  @Column(DataType.STRING)
  type!: string;

  @Column(DataType.FLOAT)
  price!: number;

  @Column(DataType.TEXT)
  description!: string;

  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;

}