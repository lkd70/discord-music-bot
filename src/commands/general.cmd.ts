import { Discord, Slash } from "discordx";
import { CommandInteraction, MessageEmbed } from "discord.js";

@Discord()
export abstract class SlashExample {
  @Slash("help", { description: "Help information for the bot" })
  async pages(interaction: CommandInteraction): Promise<void> {

    const music_commands = 
    '`/play <song/artist> - Plays a song\n';

    const hlna_commands =
    '`/hlna <category <item> <count>` - Queries a HLNA shop calculator for the specified item';

    const ark_commands = '`/forges` - Marks forges as filled and will @ everyone when they need to be filled again\n';
  
    const embed = new MessageEmbed()
    .setTitle("Help")
    .addField("General Commands", "`help` - Shows this help message")
    .addField("Music Commands", music_commands)
    .addField("HLNA Commands", hlna_commands)
    .addField("Ark utility commands", ark_commands)

    interaction.reply({ embeds: [ embed ]});
  }
}