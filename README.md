# Translate Engine App React JS Project

## What is the use of this Repo

This Project is a Translate Engine ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Using Bootstrap along with React
4. Using Basic Routing in React
5. This App displays a form which has two input fields Name and Amount (in digits). User has to enter name and amount and has to submit the information to backend springboot application which takes both the fields as inputs and gives output in JSON having Name translated in capital case, entered amount (in digits) and enterted amount in words. 
6. Springboot application is translating the amount in to words and providing the response back.

The project Template can be used to build bigger projects

## Live Application URL

### https://ajayt1310.github.io/translate-engine-app
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://ajayt1310.github.io/translate-engine-app

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **TranslatorEngine** Component : This Component displays a form which has two input fields Name and Amount (in digits). User has to enter name and amount. To submit the information to backend springboot application which takes both the fields as inputs and gives output in JSON having Name translated in capital case, entered amount (in digits) and enterted amount in words. Springboot application is translating the amount in to words and providing the response back.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /translate which ties to *TranslatorEngine* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
