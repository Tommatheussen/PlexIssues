# PlexIssues

[![Greenkeeper badge](https://badges.greenkeeper.io/Tommatheussen/PlexIssues.svg)](https://greenkeeper.io/)

This project is created to allow users of Plex to centralize all their issues with content in 1 place.
Allows easy creation of new issues and resolving/rejecting issues.

This project is still in early stages.

## Getting started

The backend runs a simple Express server.
The fronted is created using Angular-Cli, it uses Angular and Angular Material.

### Setting up
To run the backend server, run the command `node server/server.js` to start. The API will be accessible at `localhost:3000/api` (or the configured env port).

To run the frontend, run the command `npm start` or `ng serve --proxy-config proxy.conf.json`. This starts the Angular Typescript compiler and reloads the browser when changes are detected to the source. The application will then be accessible at `localhost:4200`. The proxy file makes sure all HTTP request for the api route go towards the node server.

**Instructions on how to run 1 server, hosting both the API and a built frontend will be published later.**

It is planned to use Sqlite as data storage, because of it's lightweight usage it will allow this tool to be run without the need for seperate database installation.
