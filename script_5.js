const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


/* Est-ce que tous les livres ont été au moins empruntés une fois ?*/
const booksRented = books.every( books => books.rented > 0);
console.log("Est ce que tous les livres ont étés emprunter au moins 1 fois :" + booksRented);

/* Quel est livre le plus emprunté ?*/
const mostrentedbooks = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log("le livre le plus emprunté est : " + mostrentedbooks.title)


/* Quel est le livre le moins emprunté ?*/
const minrentedbooks = books.reduce((min, book) => min.rented > book.rented ? book : min);
console.log("le livre le plus emprunté est : " + minrentedbooks.title)
/* possible et préférable d'utiliser const minrentedbooks = books.reduce((min, book) => min.rented < book.rented ? min : book);


/* Trouve le livre avec l'ID: 873495*/
const bookswithid = books.find(book => book.id === 873495 )
console.log("le livre avec l'id 873495 est : " + bookswithid.title )


/* Supprime le livre avec l'ID: 133712*/
const deletebooks = books.findIndex(book => book.id == 133712 )
books.splice(deletebooks, 1)
console.log(books)


/* Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).*/

const tribook = books.sort(function (a, b) {
    return a.title.localeCompare(b.title);
});
console.log("La liste des livres triés par ordre alphabétique : ")
console.log(tribook)