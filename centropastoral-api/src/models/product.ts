import { Table, Column, Model,  DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Series } from './series'; // Assume you have a Series model

@Table({
  tableName: "Product"
})
export class Product extends Model<Product> {

  @Column({
    type: DataType.UUID,
    primaryKey: true
  })
  productId: string = '';

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column(DataType.STRING)
  type!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  price!: number;

  @Column(DataType.STRING)
  image!: string;

  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;

  @ForeignKey(() => Series)
  @Column(DataType.STRING)
  seriesId!: string;

  @BelongsTo(() => Series)
  series?: Series;


}



