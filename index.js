const Discord = require ('discord.js');
const client = new Discord.Client ();
var prefix = "?";
client.login('NTI3MjE0MDY5Njc4MzQyMTY0.XNB3WQ.c4iQo7X888HWjpKZJ37NLgCopXg');

client.on("message", message => {
    if(message.content === '?auteur'){
        message.channel.sendMessage('```🔥-👑| Freezie_nz#4475---------- 法赫德『˅øℓɢαяᵛʳ | вāđ fǿřēνĕя』💤🖤💔👿👑#7788----------ParaX#4903 |👑-🔥 ```');
        
        
}

});

client.on('guildMemberAdd',member =>{
    member.guild.channels.get('467739351749623820').send('**Salut**' + member.user +'🖤 , nous sommes ->' + member.guild.memberCount);
    console.log('+1')
})

client.on('guildMemberRemove',member =>{
    member.guild.channels.get('467739351749623820').send('**Bye**' + member.user  );
    console.log('-1')
})

client.on('message',message => {
    if(!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLocaleLowerCase() === prefix + 'kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Nop;(") 
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un utilisateur")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send ("nop")
        if (!member.kickable) return message.channel.send("je ne peux pas")
        member.kick()
        message.channel.send(member.user.username + ' à été kick , Oust... 🖤 !')


    }

})

