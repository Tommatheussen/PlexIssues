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

shell.rm('-rf', 'binaries');



/*
let node_version = 'v6.10.2';
let base_link = `https://nodejs.org/dist/${node_version}/node-${node_version}-`
let architectures = {
  'windows_x86': 'win-x86',
  'windows_x64': 'win-x64',
  'mac_x64': 'darwin-x64',
  'linux_x86': 'linux-x86',
  'linux_x64': 'linux-x64',
  'linux_armv6': 'linux-armv6l',
  'linux_armv7': 'linux-armv7l',
  'linux_armv8': 'linux-arm64'
}

shell.mkdir('binaries');
shell.cd('binaries');

Object.keys(architectures).forEach(function (key) {
  shell.mkdir(key);

  console.log(`Started creating package for ${key}`);

  let extension = key.includes('windows') ? '.zip' : (key.includes('mac') ? '.tar.gz' : '.tar.xz');

  shell.exec(`wget -q ${base_link}${architectures[key]}${extension}`);

  let open_cmd = (key == 'windows_x86' || key == 'windows_x64') ? 'unzip -q' : 'tar -xf';

  shell.exec(`${open_cmd} node-${node_version}-${architectures[key]}${extension}`);

  shell.mv(`node-${node_version}-${architectures[key]}`, `${key}/node`);

  shell.rm('-rf', `node-${node_version}-${architectures[key]}${extension}`);

  shell.cp('-R', '../release/*', key);
  shell.exec(`zip -q -r ${key} ${key}`);
  shell.rm('-rf', key);

  console.log(`Finished package for ${key}`);
}, this);*/

shell.exec('npx pkg .');

process.exit(0);
