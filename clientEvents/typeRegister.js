const { stripIndents } = require('common-tags')

module.exports = (client, command, registry) => {
  client.log.info(stripIndents`
    ${command.memberName} (${command.groupID})
    ${client.shard ? `Shard ID: ${client.shard.id}` : ''}
  `, 'typeRegister')

  // Webhook
  if (client.config.webhookConfig.enabled) {
    if (client.config.webhookConfig.clientEvents.typeRegister) {
      client.webhook({
        content: '',
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL(),
        embeds: [{
          author: { name: client.user.tag, icon_url: client.user.displayAvatarURL() },
          footer: { text: 'typeRegister' },
          timestamp: new Date(),
          title: `typeRegister${client.shard ? ` | Shard ID: ${client.shard.id}` : ''}`,
          description: stripIndents`
            **Type Registered:** ${command.memberName} (${command.groupID})
          `,
          color: 0x00FFFF
        }]
      })
    }
  }
}