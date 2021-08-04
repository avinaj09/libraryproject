/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
 // this is using the filter method.
  let getParks = [];
  getParks = parks.filter((park) => park.location.state === state);
  return getParks;
}
 /* this is writing it out the long way.
 for(let i = 0; i < parks.length; i++) {
    let park = parks[i];
    if(park.location.state === state) {
      console.log(getParks.push(park));
    }
  }
  return getParks;
*/

function getWishlistParksForUser(parks, users, username) {
  let wishlist = users[username].wishlist;
  return parks.filter((park) => wishlist.includes(park.id));
}

function userHasVisitedAllParksInState(parks, users, state, userName) {
  //Obtain the list of parks that a user has visited.
  //returns the array of visited parks for the specified user.
  const visitedList = users[userName].visited;
  //Obtain a list of all the parks that are in a specific state.
  //Re-use the getParksByState function done previously.
  //Returns an array of park objects within a specific state.
  const stateParkList = getParksByState(parks, state);
  //Check the stateParkList to see if every one of their IDs is in the visitedList array.
  let hasVisited = stateParkList.every((currentPark) => visitedList.includes(currentPark.id));
  //return true or false if the specific user has visited them all.
  return hasVisited;
}

function userHasVisitedParkOnWishlist(users, username1, username2) {
  const visitedList = users[username1].visited;
  
  const wishList = users[username2].wishlist;
  
let hasVisited = wishList.some((currentPark) => visitedList.includes(currentPark) );
  return hasVisited;
}

function getUsersForUserWishlist(users, selectedUser) {
  const userObj = Object.keys(users);
  return userObj.reduce((acc, username) => {
    const hasBeenVisited = userHasVisitedParkOnWishlist(users, username, selectedUser);
    if(hasBeenVisited) acc.push(username);
    return acc;
  }, []);
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
