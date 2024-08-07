# Craig-bot
**A simple Discord joke bot for entertainment purposes**

![craigBot](https://github.com/levitheworst/craig-bot-doc/blob/main/img/craigbot.png)

## Introduction

### About
This bot is a Node.js project. Discord.js was the library used to connect to the Discord API, but Axios was also used for HTTP requests with external APIs.

### TypeScript
One important thing to note is the installation of the `@types/node` package. This package contains a library of all native type definitions used in Node through JavaScript runtime. As this project used TypeScript to compile the JavaScript files as distribution, and Node has no direct compatibility with TypeScript, the package was installed. CommonJS modules, part of Node's native package, for example, can be shown through Visual Studio's Intellisense. Actually, CommonJS, Node's standard for module implementation, is often used through this application (as seen with the commonly used method `require(id:string):any` and object `module.exports`).

## Set up

### Discord's Developer Platform

In order to get a functional Discord bot through this project, you must create an application in Discord's official Developer Portal (https://discord.com/developers/applications). The bot requires some privileged Gateway Intents, they give specific permissions to the bot on how it can interact with the server. With the current project's settings, it is recommended to apply all of them, they can be found in the 'Bot' tab.

![PrivilegedIntents](https://github.com/levitheworst/craig-bot-doc/blob/main/img/privilegedintents.png)

In the 'OAuth2' tab, you can select, when inviting the bot to a server in the OAuth2 URL Generator, it is recommended to select the scope 'bot' and the 'Administrator' bot permission, as it gives full permissions over the server's features. **Note**: *In more complex scenarios, it is not recommended to give the bot full administrative permissions, but rather select specific permissions due to security reasons.*

### Local configuration
By cloning/downloading this repository, a few things should be configured. A file must be used as a configuration file, one to keep crucial information about the app. It is recommended to create a JSON file named `config.json` in the project's root to contain the following:

```
{
    "discordToken": ...,
}
```

The property `discordToken` is reference to the Bot's token, found in the Bot tab from the Developer Portal. By clicking 'Reset Token', the generated token is stored in it. *Note: the token is dangerous information, it should be safely stored. Leaking it makes your application vulnerable to hacking or exploits*

![token](https://github.com/levitheworst/craig-bot-doc/blob/main/img/token.png)

It is optional to store some more information of the application/bot:

```
{
    "discordToken": ...,
    "appId": ...,
    "publicKey": ...,
    "discordApiVersion": "v9"
}
```
Since it is a JSON file, being compatible with CommonJS implementation system, it is possible to get these properties through the `require()` method.

```
//Note: app.ts is located in "./src/app.ts", but the .json file is located in the root.
const config = require('../config.json');

const discordToken = config.discordToken;
```

An alternative:

```
//Destructures the object's properties converted from JSON
const { discordToken } = require('../config.json');
```

Using Dotenv to store these information as environment variables is also possible. By installing `dotenv` and importing it, all variables listed in a file named `.env` in the project's root can be loaded into the Node process.

```
DISCORD_TOKEN=...
```

Through the method `dotenv.config()`, all of these variables are loaded into the object `process.env` as properties. To access the token, for example, it would be `process.env.DISCORD_TOKEN`.

### Install

Just do `npm i` or `npm install` to install all dependencies listed in `package.json`. These modules will be in `./node_modules`.

## Debugging

### Server commands

In `package.json`, a few commands (scripts) are available to operate the server in an easier way. The ones that must be used are `start` and `update`. The `start` command, as it implies with its name, starts the bot application by running the JavaScript file located in `./dist/app.js`. If a change has to be done, it must be done in the .ts files available through `./src`. These TypeScript files are compiled into JavaScript by the TSC (TypeScript Compiler) after using the `update` command into `.dist/` in the way they have been structured.

Note: *the update command uses a module named "concurrently", it basically allows the terminal to run multiple commands in a single line. It was installed to make it easy if any other future development library/framework/module to be added ever requires compiling*

Supposing the project's folder is located in `c:/users/levi/craig-bot/`, the command terminal should look like:

```
C:\Users\levi\craig-bot>
```

Let's say the `./dist`, the folder containing the file (`app.js`) to be run by the Node environment, doesn't exist or was deleted.

```
craig-bot:
    misc
        img
            ...
    src
        ...
        app.ts
    config.json
    discordconfig.json
    package.json
    README.md
    tsconfig.json

```

By running the update command...

```
C:\Users\levi\craig-bot>npm run update
...

```

```
craig-bot:
    dist
        ...
        app.js
    misc
        img
            ...
    src
        ...
        app.ts
    config.json
    discordconfig.json
    package.json
    README.md
    tsconfig.json
```

TypeScript's compiling can be configured and changed in `tsconfig.json` located in the root.

## Notes

### Nodemon
It is highly recommended to use Nodemon's module with Discord Bots when debugging them **since you do not store information in the local repository**, but in an external repository/api instead. This project has functions that store information in the `./db` folder, so using Nodemon without removing this feature or changing Nodemon's configurations will result in constant app rebooting.