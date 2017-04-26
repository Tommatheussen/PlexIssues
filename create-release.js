#!/usr/bin/env node
'use strict';

const shell = require('shelljs');

console.log('Checking Angular CLI installation');

if (!shell.which('ng')) {
  console.error("Could not find Angular CLI installation!");
  process.exit(-1);
}

console.log('Starting build');

const frontendBuild = shell.exec('ng build --prod');

if (frontendBuild.code !== 0) {
  console.error("Angular build failed!");
  process.exit(-1);
}

console.log('copying files');

shell.rm('-rf', 'release');

console.log('cleared release folder');

shell.mkdir('release');
shell.cp('-R', 'dist/', 'release');
shell.mkdir('release/server');
shell.cp('-R', 'server/!(tests)', 'release/server');
shell.cp('package.json', 'release');

process.exit(0);