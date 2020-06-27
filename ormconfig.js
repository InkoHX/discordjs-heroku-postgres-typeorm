/**
 * The TypeORM Configuration File
 *
 * Docs: https://typeorm.io/#/using-ormconfig
 */

/**
 * @type {import('typeorm').ConnectionOptions}
 */
const production = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrationsTableName: 'migrations',
  entities: [
    'src/entities/*.ts'
  ],
  migrations: [
    'src/migrations/*.ts'
  ],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities'
  }
}

/**
 * @type {import('typeorm').ConnectionOptions}
 */
const development = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: true,
  migrationsTableName: 'migrations',
  entities: [
    'src/entities/*.ts'
  ],
  migrations: [
    'src/migrations/*.ts'
  ],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities'
  }
}

module.exports = process.env.NODE_ENV === 'development'
  ? development
  : production
