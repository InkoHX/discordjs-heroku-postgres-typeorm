import { Guild } from 'discord.js'
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class GuildSettings extends BaseEntity {
  @PrimaryColumn()
  public id!: string

  // Let's add columns.

  public constructor(guild?: Guild) {
    super()

    if (guild) {
      this.id = guild.id
    }
  }
}
