import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "src/entities/item.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private readonly itens: Repository<Item>
      ) {}

    async getAllItens(): Promise <Item[]>{
        return this.itens.find();
    }

    async getIdItens(id: number): Promise <Item>{
        return this.itens.findOneBy({id: id});
    }

    async getNomeItens(nome: string): Promise <Item>{
        return this.itens.findOneBy({nomeItem: nome});
    }

    async getCategoriaItens(categoria: string): Promise <Item>{
        return this.itens.findOneBy({categoria: categoria});
    }

    async createItem(item: Item): Promise <Item>{
        return this.itens.save(item);
    }

    async updateItem(id: number, updateItem: Item): Promise<Item> {
        await this.itens.update(id, updateItem);
        return this.itens.findOneBy({id: id});
    }
    
    async deleteItem(id: number): Promise<void> {
        await this.itens.delete(id);
    }
}