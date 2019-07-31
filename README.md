# DND Character Sheet Creator

## Project Overview

You and a friend have been hanging, and you really want to play DnD,
but you left all your characters at home.

You've tried online character creators, but many of them require an 
annoying login to use, and have poor customizability, and provide 
little or no support for homebrew. Also, you guys have played for
a while, and you don't like the handholding.

Either that, or they were created with old web technology, and are just
cumbersome to use.

If only you had a simple lightweight character creator, which is simple
and easy to use, features automatically calculated mods and proficencies, 
is customizable, and uses plain text as input for your inventoy.

That was the focus behind creating this dnd character sheet creator

## Features

- A lightweight and easy to use.
- Looks good on both desktop and mobile.
- No login needed
- Stores characters safely online
- Can be easily deployed on a private web server running express

## Deployment

There are two major steps needed to deploy this character creator.

### Step 1

You must create a web server which implements the following API on port 3001

  get /getCharacters will return a list of characters by name.

  get /getCharacter?name='character name' will return the character specified by name

  post /saveCharacter will write the character to the database for saving

My webserver which implements there features will be posted soon.

### Step 2

Second, download this repository and run the following commands

 'npm run build' will build the project, creating an output build folder.

  Switch to the build folder and run

 'npm install -s serve' will install a minimal express server on your machine to serve the project

 'npx serve -l 3000' will serve your website on port 3000. You can use any port you like, as long as port 3001 is open for the server.

## Planned updates

The ability to detect spells in your spell list and provide tool tips with 
their descriptions. These descriptions will need to be provided by the
user on their backend, and will not be provided here.

A demo which operates without a server, and allows you to save character
sheets to your personal device.

A script to automatically set up your custom server on linux and 
windows machines.
