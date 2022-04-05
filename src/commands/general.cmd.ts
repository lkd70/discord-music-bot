import { Discord, Slash } from "discordx";
import { CommandInteraction, MessageEmbed } from "discord.js";

@Discord()
export abstract class SlashExample {
  @Slash("help", { description: "Help information for the bot" })
  async pages(interaction: CommandInteraction): Promise<void> {

    const music_commands = 
    '`/music play <song/artist> - Plays a song\n' +
    '`/music leave` - Leaves the voice channel\n' +
    '`/music pause` - Pauses the music\n' +
    '`/music resume` - Resumes the music\n' +
    '`/music seek` - Seeks to a specific time\n' +
    '`/music skip` - Skips the current song\n' +
    '`/music playlist` - Shows the current playlist\n' +
    '`/music mix` - mixes current queue\n';

    const hlna_commands =
    `/hlna <category <item> <count> - Queries a HLNA shop calculator for the specified item`

    const embed = new MessageEmbed()
    .setTitle("Help")
    .addField("General Commands", "`help` - Shows this help message")
    .addField("Music Commands", music_commands)
    .addField("HLNA Commands", hlna_commands);

    interaction.reply({ embeds: [ embed ]});
  }
}