# Simple one page app
 Simple application in React Native.
 
![Imgur](https://i.imgur.com/jfYJM9hl.jpg?1)
![Imgur](https://i.imgur.com/SaPWy6ll.jpg?1)
![Imgur](https://i.imgur.com/JmgZTFZl.jpg?1)

## Getting Started
hese instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

You need to install
1. [Node LTS](https://nodejs.org/en/download/)
2. Expo
     You can use npm to install the Expo CLI command line utility

    ```
    npm install -g expo-cli
    ```
3.Yarn

    ```
    npm i yarn
    ```
    
## Running the tests

To running tests, run command

  ```
  yarn start
  ```
if u had issue, go to \node_modules\metro-config\src\defaults\blacklist.js and replace

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

to 

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
