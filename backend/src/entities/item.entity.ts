import { Collection, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ItensPedido } from "./itenspedido.entity";

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeItem: string;

    @Column()
    precoItem: number;

    @Column()
    categoria: string;

    @OneToMany(()=> ItensPedido, itenspedido => itenspedido.item)
    itenspedido: ItensPedido[];
}