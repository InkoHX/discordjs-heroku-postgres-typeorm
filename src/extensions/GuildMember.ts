import { Structures } from 'discord.js'

import { GuildMemberSettings } from '..'

declare module 'discord.js' {
  interface GuildMember {
    getSettings(): Promise<GuildMemberSettings>
  }
}

export default Structures.extend('GuildMember', BaseClass => class extends BaseClass {
  public async getSettings(): Promise<GuildMemberSettings> {
    const settings = await GuildMemberSettings.findOne(this.id)

    if (!settings) return new GuildMemberSettings(this)
    else return settings
  }
})
