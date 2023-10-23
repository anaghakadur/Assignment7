//Problem-1
var favMovies = ["Harry Potter", "Insidious", "Conjuring", "A Quiet Place", "Descpicable Me"];
document.write(favMovies[1]);
console.log(favMovies[1]);


//Problem-2
var movies = new Array(5);
for (var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
document.write('<br>'+movies[0]);
console.log(movies[0]);


//Problem-3
movies.splice(2, 0, "The Intern");
document.write('<br>'+movies.length);
console.log(movies.length);


//Problem-4
var movies = [];
for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}
delete movies[0];
document.write('<br>'+movies);
console.log(movies);


//Problem-5
var favMovies = ["Harry Potter", "Insidious", "Conjuring", "A Quiet Place", "Descpicable Me", "Forrest Gump", "The Nun"];
var movies = [];


for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    document.write('<br>'+movies[j]);
    console.log(movies[j]);
}


//Problem-6
for (index in movies) {
    document.write('<br>'+movies[index]);
    console.log(movies[index]);
}


//Problem-7
var sortedMovies = movies.sort();
for (index in sortedMovies) {
    document.write('<br>'+sortedMovies[index])
    console.log(sortedMovies[index]);
}


//Problem-8
var leastFavMovies = ["Annabelle", "Batman", "Ironman"];
var favMovies = movies;

console.log("\nMovies I like:\n\n" + favMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//Problem-9
var movies = favMovies.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

document.write('<br>'+reverseSort.join("\n"));
console.log(reverseSort.join("\n"));

//Problem-10
document.write('<br>'+reverseSort.pop());
console.log(reverseSort.pop());