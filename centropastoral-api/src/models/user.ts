import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { Role   } from './role';
import { Subscription } from './subscriptions'; 

@Table({
  tableName: "User"
})
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    type: DataType.STRING
  })
  userId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  email!: string;

  @Column(DataType.STRING)
  telephone!: string;

  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  roleId!: number;

  @BelongsTo(() => Role)
  role?: Role;

  @ForeignKey(() => Subscription)
  @Column(DataType.STRING)
  subscriptionId!: string;

  @BelongsTo(() => Subscription)
  subscription?: Subscription;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

}