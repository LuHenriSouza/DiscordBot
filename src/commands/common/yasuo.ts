import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'copypasta',
    description: 'Envia alguma CopyPasta',
    type: ApplicationCommandType.ChatInput,
    options:
        [
            {
                name: 'yasuo',
                description: 'copy pasta do yasuo',
                type: ApplicationCommandOptionType.Subcommand
            }
        ]
    ,
    async run({ interaction, options }) {
        const subComand = options.getSubcommand();

        switch (subComand) {
            case 'yasuo':
                await interaction.reply({
                    content: `Ta, mas você sabe fazer keyblade beyblade AA + F + N + D + E + A + G + A + R + A + OA ?`
                });
                await interaction.followUp({
                    content: 'Ata, FOI OQUE EU PENSEI!'
                })
                break
        }
    },
});