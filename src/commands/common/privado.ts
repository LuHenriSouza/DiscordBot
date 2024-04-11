import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: 'pv',
    description: 'Envia mensagem personalizada para alguém',
    type: ApplicationCommandType.ChatInput,
    options:
        [
            {
                name: 'usuário',
                description: 'Usuário',
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: 'mensagem',
                description: 'texto',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    ,
    async run({ interaction, options }) {
        const text = options.getString('mensagem');
        const user = options.getUser('usuário');

        if (!text) return console.error('TEXTO NAO ENCONTRADO'.red);
        if (!user) return console.error('USUARIO NAO ENCONTRADO'.red);

        await interaction.deferReply();
        await user.send({
            content: `${interaction.user} FALOU QUE VOCÊ É VIADO E TE ENVIOU ESSA MENSAGEM: \n\n${text}`
        }).catch(async (e) => {
            await interaction.editReply({
                content: 'Erro: ' + e
            });
        });

        await interaction.editReply({
            content: 'Menságem Enviada!'
        });
    },
});