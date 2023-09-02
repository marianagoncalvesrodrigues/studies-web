import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { Item } from 'src/entities/item.entity';
import { ItemService } from 'src/services/item.service';

@Controller('itens')
export class ItemController{
    constructor(private itemService: ItemService){}

    @Get()
    async getAllItens(): Promise<Item[]> {
        return this.itemService.getAllItens();
    }

    @Get(':id')
    async getIdItens(@Param('id') id: number): Promise<Item> {
        return this.itemService.getIdItens(id);
    }

    @Get(':nome')
    async getNomeItens(@Param('nome') nome: string): Promise<Item> {
        return this.itemService.getNomeItens(nome);
    }

    @Get(':categoria')
    async getCategoriaItens(@Param('categoria') categoria: string): Promise<Item> {
        return this.itemService.getCategoriaItens(categoria);
    }

    @Post()
    async createItem(@Body() item: Item): Promise<Item>{
        return this.itemService.createItem(item);
    }

    @Put(':id') //aqui eu coloco o parametro em q quero fazer a mudança?
    async updateItem(@Param('id') id: number, @Body() item: Item): Promise<Item>{
        return this.itemService.updateItem(id, item);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: number): Promise<void>{
        return this.itemService.deleteItem(id);
    }
}