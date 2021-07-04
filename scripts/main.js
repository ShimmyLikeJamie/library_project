let new_book_button = document.querySelector("button")
let table_body = document.querySelector("tbody")
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggle_read;
}

Book.prototype.toggle_read = function() {
    if (this.read === false) {
        this.read = true
    }
    else {
        this.read = false
    }
    return this.read
}

function addBookToLibrary(book) {
    book.index = myLibrary.length
    myLibrary.push(book)
}


/*new_book_button.onclick = function() {

    //get details from user about book
    let title = prompt("Enter the book title")
    while (title === null) { //loop to check for non-answers
        title = prompt("Enter the book title")
    }
    let author = prompt("Enter the book author")
    while (author === null) {
        author = prompt("Enter the book author")
    }
    let pages = prompt("Enter the number of pages")
    while (pages === null) {
        pages = prompt("Enter the number of pages")
    }
    let read = confirm("Have you read this book? \"OK\" for yes, \"Cancel\" for no")

    //create book and add it to library
    let book = new Book(title, author, pages, read)
    addBookToLibrary(book)

    //create row and cells for book info
    let book_row = document.createElement('tr')
    let title_cell = document.createElement('td')
    let author_cell = document.createElement('td')
    let pages_cell = document.createElement('td')
    let read_cell = document.createElement('td')
    let delete_cell = document.createElement('td')
    let toggle_cell = document.createElement('td')

    //add book data  to cells
    title_cell.appendChild(document.createTextNode(`${book.title}`))
    author_cell.appendChild(document.createTextNode(`${book.author}`))
    pages_cell.appendChild(document.createTextNode(`${book.pages}`))
    read_cell.appendChild(document.createTextNode(`${book.read}`))

    //add row to table, and cells to row
    table_body.appendChild(book_row)
    book_row.appendChild(title_cell)
    book_row.appendChild(author_cell)
    book_row.appendChild(pages_cell)
    book_row.appendChild(read_cell)
    book_row.appendChild(delete_cell)
    book_row.appendChild(toggle_cell)
    
    //create delete button
    let delete_button = document.createElement('button')
    delete_button.innerHTML = 'Delete';
    delete_button.onclick = function() {
        for (let index = 0; index < myLibrary.length; index++) {
            if (title_cell.textContent === myLibrary[index].title) {
                myLibrary.splice(index, 1)
                table_body.deleteRow(index)
                break
            }
        }
    }
    delete_cell.appendChild(delete_button)

    //create toggle_read button
    let toggle_button = document.createElement('button')
    toggle_button.innerHTML = 'Read'
    toggle_button.onclick = function () {
        for (let index = 0; index < myLibrary.length; index++) {
            if (title_cell.textContent === myLibrary[index].title) {
                read_cell.innerHTML = myLibrary[index].toggle_read()
                break
            }
        }
    }
    toggle_cell.appendChild(toggle_button)
}*/