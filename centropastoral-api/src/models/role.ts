// models/Order.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { User } from './user';

@Table({
    tableName:"Roles"
})
export class Role extends Model<Role> {
 
    @Column({
        primaryKey: true,
        type: DataType.INTEGER
    })
    roleId!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    role!: string;

    @Column({
        type: DataType.DATE
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE
    })
    updatedAt!: Date;
  
    @HasMany(() => User)
    users?: User[];
}
