import { Client } from '.'

const client = new Client()

client.on('guildCreate', async guild => {
  const settings = await guild.getSettings()

  console.log(settings)
})

client.login()
  .catch(console.error)
