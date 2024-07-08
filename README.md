# Sintio supported chargers

Sintio is a SaaS provider for the operation and billing of electric vehicle charging stations. We achieve this through the Sintio Portal, accessible via [sintio.app](https://www.sintio.app/). Additionally, we offer both [Android](https://play.google.com/store/apps/details?id=com.sintio.app) and iPhone apps.

This repository provides an API for delivering images and properties of charging stations that cannot be received through OCPP (Open Charge Point Protocol) commands from the charging stations themselves. The list of available properties and images is continuously expanded.

## Run the project locally

This propject is based on [Vite + React](https://vitejs.dev/). To run it locally on your machine we recommend following setup.

1. We recommend using [Visual Studio Code](https://code.visualstudio.com/) as code editor and install the extensions, listed in [.vscode/extensions.json](./.vscode/extensions.json)

2. Install [Node.js](https://nodejs.org/en) in the version, specified in [.nvmrc](./.nvmrc).

Follwoing commands are supported.

* `npm run dev` start dev server
* `npm run build` build for production
* `npm run preview` locally preview production build
* `npm run lint` automated checking of source code for programmatic and stylistic errors

## Production build

The project is deployed via GitHub Pages and can be viewed on [sintio-ag.github.io/sintio-supported-chargers](https://sintio-ag.github.io/sintio-supported-chargers/)
