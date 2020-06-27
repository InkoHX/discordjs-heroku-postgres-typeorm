import { Structures } from 'discord.js'

import { UserSettings } from '..'

declare module 'discord.js' {
  interface User {
    getSettings(): Promise<UserSettings>
  }
}

export default Structures.extend('User', BaseClass => class extends BaseClass {
  public async getSettings(): Promise<UserSettings> {
    const settings = await UserSettings.findOne(this.id)

    if (!settings) return new UserSettings(this)
    else return settings
  }
})
