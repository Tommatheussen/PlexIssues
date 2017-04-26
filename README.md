# PlexIssues

[![Greenkeeper badge](https://badges.greenkeeper.io/Tommatheussen/PlexIssues.svg)](https://greenkeeper.io/)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/PlexIssues/Lobby)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/Tommatheussen/PlexIssues)

This project is created to allow users of Plex to centralize all their issues regarding content in 1 place.
Allows easy creation of new issues and resolving/rejecting issues.

First version is almost ready for use.

## Getting started
As a first step, get the code from Github.

Next, install all dependencies, I use Yarn, but npm should work just fine as well (`yarn` or `npm install`).

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
