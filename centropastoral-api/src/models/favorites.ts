import { Table, Column, Model, DataType, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { User } from './user';
import { Series } from './series';

@Table({
  tableName: 'Favorites',
  timestamps: false
})
export class Favorites extends Model<Favorites> {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  userId!: string;
  
  @PrimaryKey
  @ForeignKey(() => Series)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  seriesId!: string;
}