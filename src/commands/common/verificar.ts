import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'verificar',
    description: 'Verifica a viadagem dos membros e mostra quem é mais viado',
    type: ApplicationCommandType.ChatInput,
    async run({ interaction }) {
        const { guild } = interaction;
        if (!guild) return;

        const memberList = await guild.members.list();
        console.log(memberList);
        const response = memberList.map((m) => m.displayName).join('\n');
        await interaction.reply({
            content: `Membros: ${response}`
        });
    }
});