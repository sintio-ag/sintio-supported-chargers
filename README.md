# Sintio supported ev chargers

This repo contains some attributes of ev chargers that are officially supported by Sintio but cannot be collected via OCPP.

# Get up and running locally.

1. We recommend using [Visual Studio Code](https://code.visualstudio.com/) as code editor and install the extensions, listed in [.vscode/extensions.json](./.vscode/extensions.json)

2. Install [Node.js](https://nodejs.org/en) in the version, specified in [.nvmrc](./.nvmrc). As package manager we work with [pnpm](https://pnpm.io/), so install pnpm globaly in Version 8 with `npm install -g pnpm@latest-8`. Run `node -v`and `pnpm -v` to check if you have the correct versions installed.

3. Cd into the repo and run `pnpm install`.

2. Run `pnpm run dev` for develpment purpose.

3. Build the JavaScript files with `pnpm run build`.

4. Run the project with `node ./dist/index.js`