import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

// THIS CONFIG IS USED FOR ELEPHANT_SQL DATABASE
const config: ConnectionOptions = {
  type: 'postgres',
  url: process.env.POSTGRESQL_URL,
  synchronize: false,
  logging: false,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: ['src/subscriber/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
