import {
    Table,
    Column,
    Model,
    DataType,
    Default,
  } from 'sequelize-typescript';
  
  @Table({
    tableName: 'Categories'
  })
  export class Category extends Model<Category> {

  @Default(DataType.UUIDV4)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  categoryId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string | null;

  @Column({
    type: DataType.DATE
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE
  })
  updatedAt!: Date;

}