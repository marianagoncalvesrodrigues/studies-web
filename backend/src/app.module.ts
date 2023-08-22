import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionOptions } from 'tls';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItensPedido } from './entities/itenspedido.entity';
import { Venda } from './entities/venda.entity';
import { Item } from './entities/item.entity';
import { Cliente } from './entities/cliente.entity';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
