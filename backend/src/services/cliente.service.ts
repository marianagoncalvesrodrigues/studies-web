import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity'; // Certifique-se do caminho correto para a entidade
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clientes: Repository<Cliente>
  ) {} // Você pode substituir isso por uma fonte de dados real, como um banco de dados // Você pode substituir isso por uma fonte de dados real, como um banco de dados

  async getAllClientes(): Promise<Cliente[]> {
    return this.clientes.find();
  }

  async getIdClientes(id: number): Promise<Cliente> {
    return this.clientes.findOneBy({id: id});
  }

  async createCliente(cliente: Cliente): Promise<Cliente> {
    return this.clientes.save(cliente);
  }

  async updateCliente(id: number, updatedCliente: Cliente): Promise<Cliente> {
    await this.clientes.update(id, updatedCliente);
    return this.clientes.findOneBy({id: id});
    
  }

  async deleteCliente(id: number): Promise<void> {
    await this.clientes.delete(id);
  }
}
