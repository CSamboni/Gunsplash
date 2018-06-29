import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7JS9xLTdnKpkhITp1plkp36SzEABboIE",
    authDomain: "dashboard-7ef06.firebaseapp.com",
    databaseURL: "https://dashboard-7ef06.firebaseio.com",
    projectId: "dashboard-7ef06",
    storageBucket: "dashboard-7ef06.appspot.com",
    messagingSenderId: "429140158123"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
   name: 'Cristian Samboni',
   age: 16,
   isSingle: true,
   location: {
       city: 'Pitalito',
       country: 'Colombia'
   }
});

//database.ref().set('This is my data');

database.ref('age').set(17);
database.ref('location/city').set('Bogotá');



//atributes
//height
//wight