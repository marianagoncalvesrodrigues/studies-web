import { Collection, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { Venda } from "./venda.entity";
@Entity()
export class ItensPedido{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;

    @OneToMany(()=> Item, item => item.itenspedido)
    item: Item[];

    @ManyToOne(()=> Venda, venda => venda.itenspedido)
    venda: Venda[];
}