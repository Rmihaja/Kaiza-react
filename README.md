# Kaiza

This project is an adaptation of my initial project [Kaiza](https://github.com/Rmihaja/Kaiza/), now using React. Following [this tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d) teaching the basis of React, I made the necessary changes accordingly to make it fit with my initial concept.

## How it works

Unlike the original project, this app works as a true online social network app, with actual data fetched and served from a backend server, using a fake REST api from [my-json-server](https://my-json-server.typicode.com/rmihaja/kaiza-react).

## Installation

This project was initialized with create-react-app.

In the project directory, you can run the app in development mode with :

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## What's next?

The remote server has a limitation : changes are faked and aren't persisted. It means user made modifications are lost on page reload.

This experiment was mostly focused on React fundamentals (like components and hooks) and building a true frontend app. Implementing a true api to Kaiza is the next feature to be added.
