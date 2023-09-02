import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Venda } from "src/entities/venda.entity";
import { Repository } from "typeorm";

@Injectable()
export class VendaService{
    constructor(
        @InjectRepository(Venda)
        private readonly vendas: Repository<Venda>
    ){}

    async getAllVendas(): Promise <Venda[]>{
        return this.vendas.find();
    }

    async getIdVendas(id: number): Promise <Venda>{
        return this.vendas.findOneBy({id: id});
    }

    async createVenda(venda: Venda): Promise <Venda>{
        return this.vendas.save(venda);
    }

    async deleteVenda(id: number): Promise<void> {
        await this.vendas.delete(id);
    }


}