import { Client, User, UserResolvable } from 'discord.js';

const env = require('../../config.json');

const token = env.discordToken || null;

const client = new Client({ intents: [] });

client.token = token;

const userFetch = async (userInfo:UserResolvable): Promise<User> =>
    client.users.fetch(userInfo);

export default userFetch;
    