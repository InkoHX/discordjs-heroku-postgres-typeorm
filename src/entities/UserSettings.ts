import { User } from 'discord.js'
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class UserSettings extends BaseEntity {
  @PrimaryColumn()
  public id!: string

  // Let's add columns.

  public constructor(user?: User) {
    super()

    if (user) {
      this.id = user.id
    }
  }
}
