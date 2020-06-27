import { Client as BaseClient } from 'discord.js'
import { createConnection } from 'typeorm'

export class Client extends BaseClient {
  public async login(token?: string): Promise<string> {
    await createConnection()

    return super.login(token)
  }
}
