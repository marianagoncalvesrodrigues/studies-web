import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Venda } from "./venda.entity";

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    password: string;

    @Column()
    endereco: string;

    @OneToMany(()=>Venda, venda => venda.cliente)
    vendas: Venda[];
}