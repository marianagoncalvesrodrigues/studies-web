import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { privateDecrypt } from "crypto";
import { ItensPedido } from "src/entities/itenspedido.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItenspedidoService{
    constructor(
        @InjectRepository(ItensPedido)
        private readonly itenspedido: Repository<ItensPedido>

    ){}

    async getAllItenspedido(): Promise <ItensPedido[]>{
        return this.itenspedido.find();
    }

    async getIdItenspedido(id: number): Promise <ItensPedido>{
        return this.itenspedido.findOneBy({id: id});
    }

    async updateItenspedido(id: number, updateItenspedido: ItensPedido): Promise<ItensPedido> {
        await this.itenspedido.update(id, updateItenspedido);
        return this.itenspedido.findOneBy({id: id});
    }

    async deleteItenspedido(id: number): Promise <void>{
        await this.itenspedido.delete(id);
    }
}