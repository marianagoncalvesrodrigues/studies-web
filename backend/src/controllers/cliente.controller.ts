import { Controller, Get, Post, Put, Delete } from '@nestjs/common'
import { Cliente } from 'src/entities/cliente.entity';

@Controller('clientes')
export class ClienteController{
    constructor(private clienteService: ClienteService){}

    @Get()
    async getAllClientes(): Promise<Cliente[]> {
        return this.clienteService.getAllClientes();
    }

    @Get()
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