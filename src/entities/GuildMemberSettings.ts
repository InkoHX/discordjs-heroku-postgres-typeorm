import { GuildMember } from 'discord.js'
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class GuildMemberSettings extends BaseEntity {
  @PrimaryColumn()
  public id!: string

  // Let's add columns.

  public constructor(member?: GuildMember) {
    super()

    if (member) {
      this.id = member.id
    }
  }
}
