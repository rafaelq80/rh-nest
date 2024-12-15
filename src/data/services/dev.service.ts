import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Colaborador } from "../../colaborador/entities/colaborador.entity";
import { Departamento } from "../../departamento/entities/departamento.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_rh',
            entities: [Departamento, Colaborador, Usuario],
            synchronize: true,
    };
  }
}