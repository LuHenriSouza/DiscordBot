import { ApplicationCommandType, ButtonBuilder, ActionRowBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'ping',
    description: 'reply with pong',
    type: ApplicationCommandType.ChatInput,
    async run({ interaction }) {

        const row = new ActionRowBuilder<ButtonBuilder>({
            components: [
                new ButtonBuilder({ customId: 'test button', label: 'Clique aqui', style: ButtonStyle.Success })
            ]
        })

        await interaction.reply({ ephemeral: true, content: "pong", components: [row] })
    },
    // buttons: new Collection([
    //     ['test button', async (interaction) => {
    //         interaction.update({ components: [] })
    //     }]
    // ])
});