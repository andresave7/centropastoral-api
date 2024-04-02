// models/Purchase.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user';
import { Series } from './series';

@Table({
  tableName:"Purchase"
})
export class Purchase extends Model<Purchase> {
  @Column({
    primaryKey: true,
    type: DataType.STRING
  })
  purchaseId!: string;

  @ForeignKey(() => User)
  @Column(DataType.STRING)
  userId!: string;

  @ForeignKey(() => Series)
  @Column(DataType.STRING)
  seriesId!: string;

  @Column(DataType.DATE)
  purchaseDate!: Date;

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

}