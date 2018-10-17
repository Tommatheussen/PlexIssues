# PlexIssues

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/Tommatheussen/PlexIssues)

This project is created to allow users of Plex to centralize all their issues regarding content in 1 place.
Allows easy creation of new issues and resolving/rejecting issues.

## Getting started
### Download
First of all, download the latest version. This can be done by 2 options:

  - Download the latest release from Github, this includes a node binary, which can be used to start the application without the need to install node itself.
  - Download the repository's release branch. This branch holds the latest code, without a node binary, useful if you have node installed on your system.

### Setup
After getting the code, the application needs to install some dependencies first. You can do this by running the `npm install --prod` command. If you're using the binaries, you should use npm referenced inside of the binaries (`./node/bin/npm`).

### Start
After the installation of the dependencies finished, you should be able to start the server. Simple run the command `node server/server.js --prod`. This will start the server which will be accessible at `localhost:3000`.



## Development
As a first step, get the code from Github.

Setup development environment, NPM is used to install the deps (`npm install`).
To run cli command locally, `npx` is used, make sure this is installed (`npm i -g npx`).

Adjust settings in the `server/config` folder, this holds the connection details to your Plex Server and database details.

After dependencies are installed, run the command `npm start`, this fires up both the API and front-end in watch mode.

To run the backend server separately, run the command `node server/server.js` to start. The API will be accessible at `localhost:3000/api` (or the configured env port).

To run the frontend separately, run the command `ng serve --proxy-config proxy.conf.json`. This starts the Angular Typescript compiler and reloads the browser when changes are detected to the source. The application will then be accessible at `localhost:4200`. The proxy file makes sure all HTTP request for the api route go towards the node server.

When you want to access the built frontend application on the server, you can simply run `ng build --prod` first, which will start creating all files needed to run the application in production mode.
The backend holds routing rules to direct `localhost:3000/` requests (and other unknown ones) to the built application.

## Technologies
* Frontend: Angular, Angular Material, created using Angular-CLI
* Backend: Express, Sequelize
* Database: SQLite

## Known issues
Attempting to install the Sqlite3 package using the binaries, when another version of node is installed on the system, will result in the application not being able to import the package (since it builds for the system version then).
