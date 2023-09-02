import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionOptions } from 'tls';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItensPedido } from './entities/itenspedido.entity';
import { Venda } from './entities/venda.entity';
import { Item } from './entities/item.entity';
import { Cliente } from './entities/cliente.entity';
import { ClienteController } from './controllers/cliente.controller';
import { VendaController } from './controllers/venda.controller';
import { ItemController } from './controllers/item.controller';
import { ItenspedidoController } from './controllers/itenspedido.controller';
import { ClienteService } from './services/cliente.service';
import { ItemService } from './services/item.service';
import { ItenspedidoService } from './services/itenspedido.service';
import { VendaService } from './services/venda.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'dbpostgres',
      entities: [ItensPedido, Venda, Item, Cliente],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ItensPedido, Venda, Item, Cliente]),
    
  ],
  controllers: [AppController, ClienteController, VendaController, ItemController, ItenspedidoController],
  providers: [AppService, ClienteService, ItemService, ItenspedidoService, VendaService],
})
export class AppModule {}
