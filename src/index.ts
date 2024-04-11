import { ExtendedClient } from './structs/ExtendedClient';
export * from 'colors';
import config from "./config.json";

const client = new ExtendedClient();

client.start();

export { client }

client.on('messageUpdate', (message) => {
    if (!message.author) return;
    if (message.author.id == client.user?.id) return;

    message.reply({
        content: "EDITA MENSAGEM NA MINHA FRENTE NÃO ARROMBADO DE MERDA"
    })

});