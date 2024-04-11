import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'acusar',
    description: 'Acusa alguém',
    type: ApplicationCommandType.ChatInput,
    options:
        [
            {
                name: 'dono',
                description: 'Acusa o dono do servidor',
                type: ApplicationCommandOptionType.Subcommand
            }
        ]
    ,
    async run({ interaction, options }) {
        const subComand = options.getSubcommand();

        switch (subComand) {
            case 'dono':
                const dono = await interaction.guild?.fetchOwner();
                if (dono) {
                    await interaction.reply({
                        content: `O dono desse servidor vulgo ${dono} é um viado sem cura !`
                    });
                } else {
                    await interaction.reply({
                        content: `Esse servidor não tem dono não? Não consegui achar esse viado.`
                    });
                }
                break
        }
    },
});