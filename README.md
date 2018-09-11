# Expensify (Vue Version)

A website that helps you to save the info of expense in detail. This is coded in Vue, [Demo](<https://expensify-hptg.herokuapp.com/>)

## ScreenShots

![Expensify](/Users/hptg/Documents/Projects/Web/Vue/Expensify-Vue/resource/expensify-vue.png)

## Technology Track:

* **Frontend:** Vue, Vuex, Webpack (`3.11.0`), Express, Moment, Vue-dates, Jest

* **Backend:** Firebase

* **Deploy:** Heroku

## Pre - Development Usage:

1. Open Teminal and `git clone git@github.com:hptg1994/Expensify_React.git`

2. Create a new app in `Firebase`,

3. Create two file in the `root` folder and seperately named  `.env.development` , `.env.test`

4. Look up the `Project Setting` of the app just created in firebase and then click `add Firebase to web ap`, copy the value of these following thing:

   > apiKey
   >
   > authDomain
   >
   > databaseURL
   >
   > projectId
   >
   > storageBucket
   >
   > messagingSenderID

5. Paste them into `.env.development` in this format: FIREBASE_API_KEY = ($ Paste the apiKey here), same on the rest.

6. Same on `.env.test`

7. Go to Authentication on firebase, activate `Google` Login Option.

## On Development 

1. On Terminal, `cd` to `expensify_react` folder.
2. Type in `npm install`
3. Type in `npm run dev-server`
4. Enjoy : )

## To Do

- [ ] Migrate it to Electron 

- [ ] Create a Flutter Version 

- [ ] Create a Angular Version

- [x] Create a React Version 

- [ ] Create a React Native Version

- [ ] Backend server write in Spring

- [ ] Backend server write in Rails

- [ ] Backend server write in Django
