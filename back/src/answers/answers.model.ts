import { Table,Model, Column, DataType, HasMany,BelongsTo, ForeignKey } from "sequelize-typescript";
import { Questions } from "src/questions/questions.model";


@Table
export class Answers extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

   
    @Column({type:DataType.STRING, allowNull:false})
    answer:string;
   
    @Column({type:DataType.BOOLEAN, allowNull:false})
    answer_bool:boolean;
    
    @ForeignKey(()=>Questions)
    @Column({type: DataType.INTEGER, allowNull: false})
    id_q:number;


    @BelongsTo(()=>Questions)
    question: Questions;
   
};