const book = {
    title: '',
    iban: '',
    description: ''
}

var books = [
    {
        title: "min første bog", iban: "1234", description: "virkelig god bog"
    }
]

//^her har jeg defineret en datamodel

module.exports.book = book;
module.exports.books = books;