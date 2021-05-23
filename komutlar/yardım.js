const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {

const deluxe = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(`**▬▬▬▬▬▬[** ©️ **Deluxe Bot** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: __${ayarlar.prefix}istatistik__ **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Botun prefixi:** __${ayarlar.prefix}__ `)
.setThumbnail(client.user.avatarURL)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» ${ayarlar.prefix}adamasmaca :** Adam Asmaca Oynarsınız.
> **» ${ayarlar.prefix}gay :** Etiketlediğiniz Kişinin Gaylik Düzeyini Öğrenirsiniz.
> **» ${ayarlar.prefix}yılbaşı :** Yılbaşı Sayacı.
> **» ${ayarlar.prefix}kaçcm :** :D?
> **» ${ayarlar.prefix}kimlik :** Rastgele Kimlik Oluşturursunuz.
> **» ${ayarlar.prefix}balık-tut :** Balık Tutarsınız.
> **» ${ayarlar.prefix}trump :** Trump Tweet Atar.
> **» ${ayarlar.prefix}rozet :** Rozetlerinizi Gösterir.
> **» ${ayarlar.prefix}kralol :** Kral Olursun.
> **» ${ayarlar.prefix}yazı-tura :** Yazı mı Tura mı?
> **» ${ayarlar.prefix}öp :** Birini Öpersin.
> **» ${ayarlar.prefix}duello :** Birisiyle Duello Atarsın.


**[Destek Sunucusu](${ayarlar.destekSunucusuDavetLinki})** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(deluxe)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};