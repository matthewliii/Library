const myLibrary = [];

const book1 = new Book("harry potter", "j.k. rowling", 500)
const book2 = new Book("think and grow rich", "napolean hill", 500)
const book3 = new Book("percy jackson", "rick rioridan", 500)

myLibrary.push(book1, book2, book3)

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}
const table = document.getElementById("table");
const cardContainer = document.getElementById("cardContainer")
function display() {
    myLibrary.forEach(book => {
        // <div class="card">
        //     <h2 class="cardText">Title</h2>
        //     <h2 class="cardText">Author</h2>
        //     <h2 class="cardText">Pages</h2>
        //     <button type="button" class="read">Read</button>
        //     <button type="button" class="Remove">Remove</button>
        // </div>
        const card = document.createElement('div').classList.add('card');
        const bookTitle = document.createElement('h2').classList.add('cardText');
        const bookAuthor = document.createElement('h2').classList.add('cardText');
        const bookPages = document.createElement('h2').classList.add('cardText');

        bookTitle.textContent = `"${book.title}"`
        bookAuthor.textContent = book.author
        bookPages.textContent = `${book.pages} pages`
        // console.log(book.title)
        // // bookTitle.textContent = "title";
        // card.appendChild(bookTitle);
        // card.innerHTML = "book"
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        cardContainer.append(card);
    });
    // table.deleteRow(0);
    // var row = table.insertRow();
    // myLibrary.forEach(book => {
    //     // var row = document.getElementById("books");
    //     var x = row.insertCell(-1);
    //     x.innerHTML = book.title;
    //     var y = row.insertCell(-1);
    //     y.appendChild(document.createElement('button').setAttribute());
    // });
}

function openForm(){
    var form = document.getElementById("add");
    form.style.display = "block"
}

const addBook = document.getElementById("newBook");
addBook.addEventListener("click", function() {
    openForm()
})

function validateForm() {
    let title = document.forms["add"]["title"].value;
    let author = document.forms["add"]["author"].value;
    let pages = document.forms["add"]["numOfPages"].value;
    if (title == "") {
        alert("Title must be filled out");
        return false;
      }
    else if (author == "") {
      alert("Author must be filled out");
      return false;
    }
    else if (pages == "") {
      alert("Pages must be filled out");
      return false;
    }
    else if (isNaN(pages)) {
        alert("Pages must be a number");
        return false;
    }
    addBookToLibrary(new Book(title, author, pages));
    display()
  }

const submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    console.log("running");
    validateForm();
    var form = document.getElementById("add");
    form.style.display = "none"
})

display();
console.log(myLibrary);