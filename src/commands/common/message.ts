import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'Suspeitar da mensagem',
    type: ApplicationCommandType.Message,
    async run({ interaction }) {
        if (!interaction.isMessageContextMenuCommand()) return;

        const message = interaction.targetMessage;

        await interaction.reply({
            content: `"${message}" Parece algo que um viado falaria... 🤨`
        });
    }
});