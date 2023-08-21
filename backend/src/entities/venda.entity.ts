import { Collection, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ItensPedido } from "./itenspedido.entity";
import { Cliente } from "./cliente.entity";

@Entity()
export class Venda{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valortotal: number;

    @Column()
    formadepagamento: string;

    @ManyToOne(()=>Cliente, cliente => cliente.vendas)
    cliente: Cliente[];

    @OneToMany(()=> ItensPedido, itenspedido => itenspedido.venda)
    itenspedido: ItensPedido[];
}