//Now let's see how to do the same thing using Promise and Fetch API
const divEle = document.querySelector(".card-container");
async function getDetails(userId){
   try{
     const response = await fetch(`https://dummyjson.com/users/${userId}`);
    //this await is actually equivalent to .then() method of promise
    //just a syntactic sugar
    console.log(response);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userData = await response.json();
    displayUser(userData, "beforeend", "user");
    //Inside async function we can actually use Try-catch block to handle errors
    // if their is any error in try it will be caught in catch block
   } catch (error) {
     console.error("Error fetching user details:", error);
   }
}
function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
            <img src=${data.image} alt="Profile Image">
            <h3>${data.firstName}</h3>
            <h3>${data.lastName}</h3>
            <p class="email">${data.email}</p>
            <button class="btn">View Profile</button>
        </div>`;
  divEle.insertAdjacentHTML(pos, card);
}
getDetails(2); 