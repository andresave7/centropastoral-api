// models/Series.ts
import { Table, Column, Model, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Product, Category} from './';

@Table({
  tableName:"Series"
})
export class Series extends Model<Series> {
  @Column({
    primaryKey: true,
    type: DataType.STRING
  })
  seriesId!: string;

  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.TEXT)
  description!: string;

  @ForeignKey(() => Category)
  @Column(DataType.STRING)
  categoryId!: string;

  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;

  @BelongsTo(() => Category)
  category?: Category;

  @HasMany(() => Product)
  products?: Product[];

}