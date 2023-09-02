import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { ClienteService } from 'src/services/cliente.service'
import { Cliente } from 'src/entities/cliente.entity'

@Controller('clientes')
export class ClienteController{
    constructor(private clienteService: ClienteService){}

    @Get()
    async getAllClientes(): Promise<Cliente[]> {
        return this.clienteService.getAllClientes();
    }

    @Get(':id')
    async getIdClientes(@Param('id') id: number): Promise<Cliente> {
        return this.clienteService.getIdClientes(id);
    }

    @Post()
    async createCliente(@Body() cliente: Cliente): Promise<Cliente>{
        return this.clienteService.createCliente(cliente);
    }

    @Put(':id')
    async updateCliente(@Param('id') id: number, @Body() cliente: Cliente): Promise<Cliente>{
        return this.clienteService.updateCliente(id, cliente);
    }

    @Delete(':id')
    async deleteCliente(@Param('id') id: number): Promise<void>{
        return this.clienteService.deleteCliente(id);
    }
}