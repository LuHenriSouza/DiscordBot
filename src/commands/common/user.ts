import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'Avisar da viadagem',
    type: ApplicationCommandType.User,
    async run({ interaction }) {
        if (!interaction.isUserContextMenuCommand()) return;

        const mention = interaction.targetMember;

        await interaction.reply({
            content: `AVISO: 🚨👮‍♂️ ${mention} FOI PEGO FAZENDO ATOS SUSPEITOS DE VIADAGEM 👮‍♂️🚨`
        });
    }
});