/*Зробити масив з мінімум 10 об'єктами. В кожному об'єкті має бути властивості.
 name назва книги, author автор, genre жанр та year рік, зробити просто його числом.
 Зробити, щоб було мінімум по 3 книги одного автора, та три книги одного жанру.
  Так от, я хочу щоб ви вивели у консоль масив назв книг, у яких один жанр, якого більше всього
 в вашому масиві, та щоб вони були у верхньому регістрі.
Потім хочу масив назв книг які були зроблені у 20 сторіччі,
 та окремо масив назв книг у 21 сторіччі.
Тобто на виході маю побачити три змінних у яких будуть ці масиви*/

const books = [
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Realism",
        year: 1813,
    },
    {
        name: "Persuasion",
        author: "Jane Austen",
        genre: "Novel",
        year: 1818,
    },
    {
        name: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        genre: "Novel",
        year: 1887,
    },
    {
        name: "Sanditon and The Watsons",
        author: "Jane Austen",
        genre: "Romantic novel",
        year: 1817,
    },
    {
        name: "The Lost World",
        author: "Arthur Conan Doyle",
        genre: "Science fiction",
        year: 1912,
    },
    {
        name: "Notes of a Ukrainian Madman ",
        author: "Lina Kostenko",
        genre: "Fiction",
        year: 2010,
    },
    {
        name: "Brave New World",
        author: "Aldous Huxley",
        genre: "Science fiction",
        year: 1932,
    },
    {
        name: "Animal Farm",
        author: "George Orwell",
        genre: "Political fiction",
        year: 1945,
    },
    {
        name: "1984",
        author: "George Orwell",
        genre: "Science fiction",
        year: 1949,
    },
    {
        name: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        genre: "Magic realism",
        year: 1967,
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Tragedy",
        year: 1925,
    },
    {
        name: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Literary fiction",
        year: 1866,
    },
   ];

let genreCalc = books.reduce((accum, book) => {

    if (book.genre in accum) {
        accum[book.genre] += 1;
    } else {
        accum[book.genre] = 1;
    }
    return accum;
 }, {});

console.log(genreCalc);

let maxNumber = 0;
let maxGenre;
let genre;
for (let key in genreCalc) {
    console.log (genreCalc[key]);
    if (maxNumber < genreCalc[key]) {
        maxNumber = genreCalc[key];
        maxGenre = key;
    }
}

console.log(maxGenre);

let mostPopGenreBooks = books.filter((book) => book.genre === maxGenre).map((book) => book.name.toUpperCase());
console.log(mostPopGenreBooks);


let century20Books = books.filter((book) => book.year >= 1900 && book.year < 2000).map((book) => book.name);
console.log(century20Books);

let century21Books = books.filter((book) => book.year >= 2000).map((book) => book.name);
console.log(century21Books);


