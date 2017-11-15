const delay = 0;

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const geeks = [
  { id: 0, thumbnailUrl: "http://placehold.it/75", pictureUrl: "http://placehold.it/300", name: "Einstein", teaser: "invented Atom Bomb", facts: ["Item 1", "Item 2"] },
  { id: 1, thumbnailUrl: "http://placehold.it/75", pictureUrl: "http://placehold.it/300", name: "Newton", teaser: "Discovered Gravity", facts: ["Item 1", "Item 2"] }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (geek) => {
  return geeks.length;
};

class Api {
  static getAllGeeks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], geeks));
      }, delay);
    });
  }

  static getGeek(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, geeks.filter(d => d.id == id)[0]));
      }, delay);
    });
  }

  static saveGeek(geek) {
    geek = Object.assign({}, geek); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (geek.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (geek.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.id) {
          const existingGeekIndex = geeks.findIndex(a => a.id == geek.id);
          geeks.splice(existingGeekIndex, 1, author);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          geek.id = generateId(geek);
          geeks.push(geek);
        }

        resolve(geek);
      }, delay);
    });
  }
}

export default AuthorApi;