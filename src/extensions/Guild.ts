import { Structures } from 'discord.js'

import { GuildSettings } from '..'

declare module 'discord.js' {
  interface Guild {
    getSettings(): Promise<GuildSettings>
  }
}

export default Structures.extend('Guild', BaseClass => class extends BaseClass {
  public async getSettings (): Promise<GuildSettings> {
    const settings = await GuildSettings.findOne(this.id)

    if (!settings) return new GuildSettings(this)
    else return settings
  }
})
