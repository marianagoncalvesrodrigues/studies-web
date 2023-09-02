import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { ItenspedidoService } from 'src/services/itenspedido.service';
import { ItensPedido } from 'src/entities/itenspedido.entity';

@Controller('itenspedido')
export class ItenspedidoController{
    constructor(private itenspedidoservice: ItenspedidoService){}

    @Get()
    async getAllItenspedido(): Promise<ItensPedido[]> {
        return this.itenspedidoservice.getAllItenspedido();
    }

    @Get(':id')
    async getIdItenspedido(@Param('id') id: number): Promise<ItensPedido> {
        return this.itenspedidoservice.getIdItenspedido(id);
    }


    @Put(':id')
    async updateItenspedido(@Param('id') id: number, @Body() itenspedido: ItensPedido): Promise<ItensPedido>{
        return this.itenspedidoservice.updateItenspedido(id, itenspedido);
    }

    @Delete(':id')
    async deleteItenspedido(@Param('id') id: number): Promise<void>{
        return this.itenspedidoservice.deleteItenspedido(id);
    }
}