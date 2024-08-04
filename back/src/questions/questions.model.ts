import { Table,Model, Column, DataType, HasMany,BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.model";

@Table
export class Questions extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

   
    @Column({type:DataType.STRING, unique:true, allowNull:false})
    question:string;
    
    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER, allowNull: false})
    id_u:number;


    @BelongsTo(()=>User)
    user: User;
   
};