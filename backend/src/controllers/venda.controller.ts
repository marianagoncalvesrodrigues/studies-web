import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { VendaService } from 'src/services/venda.service'
import { Venda } from 'src/entities/venda.entity'
import { getDataSourceToken } from '@nestjs/typeorm'

@Controller('vendas')
export class VendaController{
    constructor(private vendaService: VendaService){}

    @Get()
    async getAllVendas(): Promise <Venda[]>{
        return this.vendaService.getAllVendas();
    }

    @Get(':id')
    async getIdVendas(@Param('id') id: number): Promise <Venda>{
        return this.vendaService.getIdVendas(id);
    }

    @Post()
    async createVenda(@Body() venda: Venda): Promise <Venda>{
        return this.vendaService.createVenda(venda);
    }

    @Delete(':id')
    async deleteVenda(@Param('id') id: number): Promise<void>{
        return this.vendaService.deleteVenda(id);
    }
}