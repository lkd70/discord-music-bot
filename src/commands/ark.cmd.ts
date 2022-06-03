import {
  ApplicationCommandOptionChoice,
  AutocompleteInteraction,
  CommandInteraction,
  MessageEmbed,
} from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";

const hlna = {
  emotes: [
    {
      name: "Zombie Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/e/ef/Zombie_Emote.png",
      count: 1,
      cost: 50000,
      value: "zombieemote",
    },
    {
      name: "Panic Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/d5/Panic_Emote.png",
      count: 1,
      cost: 50000,
      value: "panicemote",
    },
    {
      name: "Nutcracker Dance Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/3/33/Nutcracker_Dance_Emote.png",
      count: 1,
      cost: 50000,
      value: "nutcrackerdanceemote",
    },
    {
      name: "Mosh Pit Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a9/Mosh_Pit_Emote.png",
      count: 1,
      cost: 50000,
      value: "moshpitemote",
    },
    {
      name: "Hungry Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/1/1b/Hungry_Emote.png",
      count: 1,
      cost: 50000,
      value: "hungryemote",
    },
    {
      name: "Happy Clap Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/7/79/Happy_Clap_Emote.png",
      count: 1,
      cost: 50000,
      value: "happyclapemote",
    },
    {
      name: "Heart Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a1/Heart_Emote.png",
      count: 1,
      cost: 50000,
      value: "heartemote",
    },
    {
      name: "Dance Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/2f/Dance_Emote.png",
      count: 1,
      cost: 50000,
      value: "danceemote",
    },
    {
      name: "Caroling Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/3/3b/Caroling_Emote.png",
      count: 1,
      cost: 50000,
      value: "carolingemote",
    },
    {
      name: "Flirty Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/9/9e/Flirty_Emote.png",
      count: 1,
      cost: 50000,
      value: "flirtyemote",
    },
    {
      name: "Food Coma Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/b/bc/Food_Coma_Emote.png",
      count: 1,
      cost: 50000,
      value: "foodcomaemote",
    },
    {
      name: "Bunny Hop Dance Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/7/78/Bunny_Hop_Dance_Emote.png",
      count: 1,
      cost: 50000,
      value: "bunnyhopdanceemote",
    },
    {
      name: "Air Drums Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/8/8a/Air_Drums_Emote.png",
      count: 1,
      cost: 50000,
      value: "airdrumsemote",
    },
    {
      name: "Air Guitar Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/5/50/Air_Guitar_Emote.png",
      count: 1,
      cost: 50000,
      value: "airguitaremote",
    },
    {
      name: "Archer Flex Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/e/e8/Archer_Flex_Emote.png",
      count: 1,
      cost: 50000,
      value: "archerflexemote",
    },
    {
      name: "Belly Rub Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/d2/Belly_Rub_Emote.png",
      count: 1,
      cost: 50000,
      value: "bellyrubemote",
    },
    {
      name: "Bicep Smooch Emote",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/7/79/Bicep_Smooch_Emote.png",
      count: 1,
      cost: 50000,
      value: "bicepsmoochemote",
    },
  ],
  consumables: [
    {
      name: "Rare Flower",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/b/bb/Rare_Flower.png",
      count: 5,
      cost: 120,
      value: "rareflower",
    },
    {
      name: "Rare Mushroom",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/3/30/Rare_Mushroom.png",
      count: 5,
      cost: 120,
      value: "raremushroom",
    },
    {
      name: "Raw Meat",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/e/e9/Raw_Meat.png",
      count: 20,
      cost: 25,
      value: "rawmeat",
    },
    {
      name: "Tintoberry",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/dd/Tintoberry.png",
      count: 50,
      cost: 10,
      value: "tintoberry",
    },
    {
      name: "Stimberry",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/c/cd/Stimberry.png",
      count: 20,
      cost: 80,
      value: "stimberry",
    },
    {
      name: "Narcoberry",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/29/Narcoberry.png",
      count: 20,
      cost: 80,
      value: "narcoberry",
    },
    {
      name: "Aggeravic Mushroom (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/d7/Aggeravic_Mushroom_%28Aberration%29.png",
      count: 50,
      cost: 46,
      value: "aggeravicmushroomaberration",
    },
    {
      name: "Amarberry",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/6/60/Amarberry.png",
      count: 50,
      cost: 10,
      value: "amarberry",
    },
    {
      name: "Aquatic Mushroom (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/de/Aquatic_Mushroom_%28Aberration%29.png",
      count: 20,
      cost: 95,
      value: "aquaticmushroomaberration",
    },
    {
      name: "Ascerbic Mushroom (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a7/Ascerbic_Mushroom_%28Aberration%29.png",
      count: 20,
      cost: 95,
      value: "ascerbicmushroomaberration",
    },
    {
      name: "Auric Mushroom (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/0/0a/Auric_Mushroom_%28Aberration%29.png",
      count: 20,
      cost: 105,
      value: "auricmushroomaberration",
    },
    {
      name: "Azulberry",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/2f/Azulberry.png",
      count: 50,
      cost: 10,
      value: "azulberry",
    },
    {
      name: "Mejoberry",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/0/00/Mejoberry.png",
      count: 50,
      cost: 18,
      value: "mejoberry",
    },
  ],
  common: [
    {
      name: "Sap",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/7/73/Sap.png",
      count: 5,
      cost: 150,
      value: "sap",
    },
    {
      name: "Sparkpowder",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/5/56/Sparkpowder.png",
      count: 50,
      cost: 50,
      value: "sparkpowder",
    },
    {
      name: "Cementing Paste",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/0/03/Cementing_Paste.png",
      count: 25,
      cost: 75,
      value: "cementingpaste",
    },
    {
      name: "Black Pearl",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/4c/Black_Pearl.png",
      count: 1,
      cost: 300,
      value: "blackpearl",
    },
    {
      name: "Charcoal",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/4f/Charcoal.png",
      count: 25,
      cost: 30,
      value: "charcoal",
    },
    {
      name: "Chitin",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a1/Chitin.png",
      count: 25,
      cost: 60,
      value: "chitin",
    },
    {
      name: "Crystal",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/3/31/Crystal.png",
      count: 10,
      cost: 115,
      value: "crystal",
    },
    {
      name: "Electronics",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/dd/Electronics.png",
      count: 5,
      cost: 700,
      value: "electronics",
    },
    {
      name: "Element",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a5/Element.png",
      count: 1,
      cost: 2000,
      value: "element",
    },
    {
      name: "Fiber",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/45/Fiber.png",
      count: 50,
      cost: 12,
      value: "fiber",
    },
    {
      name: "Flint",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/2e/Flint.png",
      count: 50,
      cost: 18,
      value: "flint",
    },
    {
      name: "Gasoline",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/6/6e/Gasoline.png",
      count: 20,
      cost: 175,
      value: "gasoline",
    },
    {
      name: "Gunpowder",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/ae/Gunpowder.png",
      count: 20,
      cost: 150,
      value: "gunpowder",
    },
    {
      name: "Hide",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/9/96/Hide.png",
      count: 50,
      cost: 60,
      value: "hide",
    },
    {
      name: "Keratin",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/8/88/Keratin.png",
      count: 25,
      cost: 60,
      value: "keratin",
    },
    {
      name: "Metal",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/e/e1/Metal.png",
      count: 10,
      cost: 150,
      value: "metal",
    },
    {
      name: "Metal Ingot",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/3/37/Metal_Ingot.png",
      count: 5,
      cost: 195,
      value: "metalingot",
    },
    {
      name: "Obsidian",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/23/Obsidian.png",
      count: 5,
      cost: 180,
      value: "obsidian",
    },
    {
      name: "Oil",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/0/06/Oil.png",
      count: 20,
      cost: 120,
      value: "oil",
    },
    {
      name: "Organic Polymer",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/1/13/Organic_Polymer.png",
      count: 5,
      cost: 500,
      value: "organicpolymer",
    },
    {
      name: "Pelt",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/45/Pelt.png",
      count: 25,
      cost: 65,
      value: "pelt",
    },
    {
      name: "Silica Pearls",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/4a/Silica_Pearls.png",
      count: 5,
      cost: 125,
      value: "silicapearls",
    },
    {
      name: "Stone",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/d4/Stone.png",
      count: 50,
      cost: 40,
      value: "stone",
    },
    {
      name: "Thatch",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/5/51/Thatch.png",
      count: 50,
      cost: 20,
      value: "thatch",
    },
    {
      name: "Wood",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/d/df/Wood.png",
      count: 50,
      cost: 25,
      value: "wood",
    },
  ],
  other: [
    {
      name: "Absorbent Substrate",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a8/Absorbent_Substrate.png",
      count: 1,
      cost: 1500,
      value: "absorbentsubstrate",
    },
    {
      name: "Ammonite Bile",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/f/fd/Ammonite_Bile.png",
      count: 1,
      cost: 350,
      value: "ammonitebile",
    },
    {
      name: "Blue Gem (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/1/13/Blue_Gem_%28Aberration%29.png",
      count: 20,
      cost: 95,
      value: "bluegemaberration",
    },
    {
      name: "Cactus Sap (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/0/0c/Cactus_Sap_%28Scorched_Earth%29.png",
      count: 50,
      cost: 24,
      value: "cactussapscorchedearth",
    },
    {
      name: "Clay (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/3/37/Clay_%28Scorched_Earth%29.png",
      count: 50,
      cost: 45,
      value: "clayscorchedearth",
    },
    {
      name: "Green Gem (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/c/c3/Green_Gem_%28Aberration%29.png",
      count: 25,
      cost: 55,
      value: "greengemaberration",
    },
    {
      name: "Plant Species X Seed",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/f/f4/Plant_Species_X_Seed.png",
      count: 1,
      cost: 1000,
      value: "plantspeciesxseed",
    },
    {
      name: "Plant Species Y Seed (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/46/Plant_Species_Y_Seed_%28Scorched_Earth%29.png",
      count: 1,
      cost: 1000,
      value: "plantspeciesyseedscorchedearth",
    },
    {
      name: "Plant Species Z Seed (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/7/71/Plant_Species_Z_Seed_%28Aberration%29.png",
      count: 1,
      cost: 1000,
      value: "plantspecieszseedaberration",
    },
    {
      name: "Propellant (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/2/2f/Propellant_%28Scorched_Earth%29.png",
      count: 5,
      cost: 190,
      value: "propellantscorchedearth",
    },
    {
      name: "Raw Salt (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/4/47/Raw_Salt_%28Scorched_Earth%29.png",
      count: 50,
      cost: 65,
      value: "rawsaltscorchedearth",
    },
    {
      name: "Red Gem (Aberration)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/a/a6/Red_Gem_%28Aberration%29.png",
      count: 10,
      cost: 125,
      value: "redgemaberration",
    },
    {
      name: "Sand (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/0/0c/Sand_%28Scorched_Earth%29.png",
      count: 50,
      cost: 28,
      value: "sandscorchedearth",
    },
    {
      name: "Silk (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/7/7c/Silk_%28Scorched_Earth%29.png",
      count: 50,
      cost: 48,
      value: "silkscorchedearth",
    },
    {
      name: "Sulfur (Scorched Earth)",
      src: "https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/c/cf/Sulfur_%28Scorched_Earth%29.png",
      count: 5,
      cost: 125,
      value: "sulfurscorchedearth",
    },
  ],
};

const forcefield_duration = (el: number, r: number) => Math.abs(Math.abs((el) / r));
const forcefeild_cost = (sec: number, r: number) => Math.abs(sec / 3600) * r;

@Discord()
export class Forges {
  @Slash()
  forges(interaction: CommandInteraction): void {
    interaction.channel?.sendTyping();
    interaction.reply("Thanks, an alert will be triggered in ~4 hours");
    const now = new Date();
    const fourHours = 14_400_000;
    const eightMinutes = 480_000;
    const timeThen = new Date(now.getTime() + fourHours + eightMinutes);
    interaction.channel?.send(`<@${interaction.member?.user.id}> has filled the forges!. I'll notify at <t:${timeThen}:t> when it's time to cycle the forges.`);
  }
}

@Discord()
@SlashGroup({ name: "forcefield" })
@SlashGroup({ name: "maths", root: "forcefield" })
export abstract class Group {
  @Slash("cost", {
    description: "Calculate the cost of a running a forcefeild for X hours on Y range"
  })
  @SlashGroup("forcefield")
  add(
    @SlashOption("hours", {
      description: "Time you wish the forcefield to run in hours"
    }) hours: number,
    @SlashOption("range", {
      description: "Range the forcefield will be running on"
    }) range: number,
    interaction: CommandInteraction
  ): void {
    interaction.reply(`A forcefield on a range of ${range} for ${hours.toLocaleString()} ` +
    `hours will cost **${forcefeild_cost(hours * 3600, range)}** element`);
  }

  @Slash("duration", {
    description: "Calculate the duration of a forcefield for X element on Y range"
  })
  @SlashGroup("forcefield")
  multiply(
    @SlashOption("element", { description: "How much element the forcefeild has" }) element: number,
    @SlashOption("range", { description: "The range of the forcefield" }) range: number,
    interaction: CommandInteraction
  ): void {
    interaction.reply(`${element.toLocaleString()} element at a range of ${range} will last ` +
    `**${forcefield_duration(element, range).toLocaleString()}** hours inside of a forcefield`);
  }
}

@Discord()
class Hlna {
  @Slash("hlna")
  autocomplete(
    @SlashOption("category", {
      autocomplete: function (
        this: Hlna,
        interaction: AutocompleteInteraction
      ) {
        interaction.respond([
          { name: "Common Resources (Island)", value: "common" },
          { name: "Other Resources (DLC)", value: "other" },
          { name: "Consumables", value: "consumables" },
          { name: "Emotes", value: "emotes" },
        ]);
      },
      type: "STRING",
    })
    category: string,

    @SlashOption("item", { autocomplete: true, type: "STRING" }) item: string,
    @SlashOption("count", { type: "INTEGER" }) count: number,

    interaction: CommandInteraction | AutocompleteInteraction
  ): void {
    // If autocomplete is not handled above, it will be passed to handler (see option-a definition)
    if (interaction.isAutocomplete()) {
      const focusedOption = interaction.options.getFocused(true);

      if (focusedOption.name === "item") {
        Object.call;
        let resp: ApplicationCommandOptionChoice[] = [];
        if (category === "emotes") {
          resp = hlna.emotes.map((item) => ({
            name: item.name,
            value: item.value,
          }));
        } else if (category === "common") {
          resp = hlna.common.map((item) => ({
            name: item.name,
            value: item.value,
          }));
        } else if (category === "consumables") {
          resp = hlna.consumables.map((item) => ({
            name: item.name,
            value: item.value,
          }));
        } else if (category === "other") {
          resp = hlna.other.map((item) => ({
            name: item.name,
            value: item.value,
          }));
        }
        interaction.respond(resp);
      }
    } else {
      // interaction.reply(`${category} ${item} ${count}`);
      const cata =
        category === "emotes"
          ? hlna.emotes
          : category === "common"
          ? hlna.common
          : category === "consumables"
          ? hlna.consumables
          : hlna.other;

      let loc_item;
      for (const i of cata) {
        if (i.value === item) {
          loc_item = i;
          break;
        }
      }

      if (loc_item) {
        const hexagons = Math.ceil(count / loc_item.count) * loc_item.cost || 0;
        const reply =
          `${count.toLocaleString()} ${loc_item.name} will cost ` +
          `${hexagons.toLocaleString()} Hexagons. ` +
          `\nThat's ${Math.ceil(
            count / loc_item.count
          ).toLocaleString()} purchases from HLNA.`;

        const embed = new MessageEmbed()
          .setTitle(
            `${count.toLocaleString()} ${
              loc_item.name
            } = ${hexagons.toLocaleString()} Hexagons`
          )
          .setThumbnail(loc_item.src)
          .setDescription(reply);

        interaction.reply({ embeds: [embed] });
      }
    }
  }
}
