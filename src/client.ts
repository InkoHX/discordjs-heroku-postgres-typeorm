import { Client as BaseClient } from 'discord.js'
import path from 'path'
import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export class Client extends BaseClient {
  public async login(token?: string): Promise<string> {
    await this.connectDatabase()

    return super.login(token)
  }

  private async connectDatabase(): Promise<Connection> {
    const target = await getConnectionOptions()
    const source = {
      entities: [
        path.join(__dirname, 'entities', '*.{js,ts}')
      ],
      migrations: [
        path.join(__dirname, 'migrations', '*.{js,ts}')
      ]
    }

    return createConnection(Object.assign(target, source))
  }
}
