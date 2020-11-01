# 3 Steps Forms
__Exercise for BA Link company__

## Abstract
This repository intends to store 2 related projects
1. Server Application
2. Client Application

The Client app consists on a 3 steps submit-form which connect to the Server app. The Server app can manage several routes.

## Server side
The server works on node.js and Express.js.

The server run on port 3000.

The server's routes are the following:
1. GET at "/country" to fetch some defined country values
2. POST at "/submit" to perform a submit by the user

In order to start the project, run in the terminal:
```
cd server-side
npm install
node start
```

## Client side
The form is in React.js.

The client side run on port 8080.

No CSS framework such as bootstrap has been used.

In order to start the project, run in the terminal:
```
cd client-side
npm install
npm start
```