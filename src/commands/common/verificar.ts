import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'verificar',
    description: 'Verifica a viadagem dos membros e mostra quem é mais viado',
    type: ApplicationCommandType.ChatInput,
    async run({ interaction }) {
        const { guild } = interaction;
        if (!guild) return;

        await interaction.deferReply();

        const memberList = guild.members.cache;

        let encontrado = false;

        if (memberList) {
            memberList.forEach((member) => {
                const presence = member.presence;
                if (presence) {
                    const activities = presence.activities;
                    if (activities) {
                        activities.forEach((activity) => {
                            if (activity.applicationId === '1129504307851567196'/* Street Fighter™ 6*/) {
                                console.log(`ID da aplicação: ${activity.applicationId}`);
                                
                            }
                        });
                    }
                }
            });
        }


    }
});