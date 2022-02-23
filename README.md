### Setup React App
- create client folder
- open terminal
- cd client => to move to client folder
- run command : npx create-react-app .
- npm start or yarn start => to run the react app i.e server

### remove the unwanted file from src folder

- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

### changing title and favicon

- change title in public/index.html
- replace favicon in pulic directory
- resource(favicons)[https//favicon.io]

### normalize css and Globals styles
- CSS in JS
- saves times on setup
- less lines of css
- speeds of the envinorment
- normalize.css
- small CSS file that provides cross-border consistency in the default 
 styling in HTML elements
- (normalize) [https://github.com/necolas/normalize.css/]
- npm install normalize.css
- import 'normalize.css' in index.js
- SET before index.css
- if any questions about normalize or specific styles

### Landing

### express.json() v/s bodyParser.json()
Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middlewares that came it. When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead. The syntax then changed from app.use(express.json()) to app.use(bodyParser.json()) after installing the bodyParser module.

bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before. That means you don't have to use bodyParser.json() anymore if you are on the latest release. You can use express.json() instead.

same for the app.use(express.urlencoded({ extended: true })) . you can use  bodyparse.urlencoded