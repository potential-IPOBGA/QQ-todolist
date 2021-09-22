# How to start QQ-todolist

There are two ways to initialize and start this project

### First-time setup

## Install dependencies

###With docker
```shell
docker build -t todolist:front-end .
```

###Without docker
```shell
yarn
```
or
```shell
yarn install
```

## Run locally
- Start your UI via

###With docker
```shell
docker run -p 3000:3000 todolist:front-end
```

###Without docker

```shell
yarn start
```
or
```shell
yarn run start
```




## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
