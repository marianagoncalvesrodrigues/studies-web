import { Collection, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ItensPedido } from "./itenspedido.entity";

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeItem: string;

    @Column()
    precoItem: number;

    @ManyToOne(()=> ItensPedido, itenspedido => itenspedido.item)
    itenspedido: ItensPedido[];
}