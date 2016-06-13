# React Screens Boilerplate

This repo contains an alternative for React Applications

The idea here is not to provide a bullet proof architecture for your next React application, instead it should inspire you to user other alternatives instead of the default "Components" and "Containers" structures.

## Getting Started

To start your development you can run `npm start` and access `localhost:3000`

To run tests, simply run `npm test`

### Folders

#### Actions

Contains all your application actions (duh!).

#### Reducers

This folder is named reducers because I'm using Redux as my flux library, you may rename it according to the library you're using.

Contains all your aplication reducers (duh again).

#### Router

In case your application have routers, I use this folder to group all routes from screens, and export the Router configuration for entry point.

#### Screens

Components that are connected to your store somehow (usually containers).

Root screens are usually your main routes as well.

A screen may contain a config folder, with configurations related to that screen (router configuration for example).

A screen may contain a inner screen folder.

A screen may contain a components folder (these components are used only within that screen).

#### Shared

All code that is shared accross your entire application, you may put here constants, components, utils, and so on...

#### Index.js

Your entry point. Here you usually configure your flux library, and some other startup stuff you may want to use.

