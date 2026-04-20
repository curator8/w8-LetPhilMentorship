// DOM HOMEWORK – FAVORITE MOVIES
// ----------------------------------------------
// GOAL: Practice selectors, textContent, and creating/removing elements.

// STEP 1: Select the heading element with id "moviesTitle" and store
//         it in a variable.

const moviesTitle = document.getElementById("moviesTitle");

// STEP 2: Select the paragraph with id "moviesInfo" and store it
//         in a variable.

const moviesInfo = document.getElementById("moviesInfo");

// STEP 3: Select the list with id "moviesList" and store it in a variable.

const moviesList = document.getElementById("moviesList");

// STEP 4: Change the textContent of moviesTitle to a new heading,
//         for example "Movie List".

moviesTitle.textContent = "Movie List";

// STEP 5: Use moviesList.children.length (or querySelectorAll)
//         to count how many movie items there are.
//         Store this number in a variable (for example, movieCount).

console.log(moviesList.children.length);
movieCount = moviesList.children.length;

// STEP 6: Update moviesInfo.textContent to show a message like:
//         "You currently have X favorite movies in your list."
//         (Use the value of movieCount in the message.)

moviesInfo.textContent = `You currently have ${movieCount} favorite movies in your list.`;

// STEP 7: Create a new li element for another movie using
//         document.createElement("li").
//         - Set its textContent to a new movie name.
//         - Add the class "movie-item" to it.
//         - Append it to moviesList.

let newFavoriteMovie = document.createElement("li");
newFavoriteMovie.textContent = "Project Hail Mary";
newFavoriteMovie.className = "movie-item";
// console.log(newFavoriteMovie);

moviesList.append(newFavoriteMovie);
movieCount = moviesList.children.length;

moviesInfo.textContent = `You currently have ${movieCount} favorite movies in your list.`;

// STEP 8: Select one of the existing movie items (for example,
//         the first one) and remove it using .remove().

// [...document.querySelectorAll(".movie-item")];
// console.log([...document.querySelectorAll(".movie-item")][0]);

// document.querySelector(".movie-item").remove();
document.querySelectorAll(".movie-item")[1].remove();

movieCount = moviesList.children.length;
// STEP 9: (Optional) After adding/removing, update moviesInfo again
//         to show the new total number of movies.

moviesInfo.textContent = `You currently have ${movieCount} favorite movies in your list.`;
