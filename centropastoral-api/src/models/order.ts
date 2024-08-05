// models/Order.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne} from 'sequelize-typescript';
import { User } from './user';
import { Series } from './series';
import { Purchase } from './purchases';

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

  @ForeignKey(() => Series)
  @Column(DataType.STRING)
  seriesId!: string;

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

  @BelongsTo(() => Series)
  series?: Series;

  @HasOne(() => Purchase)
  purchases?: Purchase[];

}
