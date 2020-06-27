import './extensions'

import { Client } from '.'

const client = new Client()

client.on('message', message => {
  if (message.system || message.author.bot) return
  if (!message.content.includes('discord')) return
  
  Promise.all([
    message.author.getSettings(),
    message.member?.getSettings(),
    message.guild?.getSettings()
  ])
    .then(console.log)
    .catch(console.error)
})

client.login()
  .catch(console.error)
