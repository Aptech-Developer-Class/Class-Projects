class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.borrowedBooks = [];
  }

  login(uName, pWord) {
    if (uName === this.username && pWord === this.password) {
      console.log(`${this.username} has logged in`);
    } else {
      console.log("Invalid Log In Details");
    }
  }
  logout() {
    console.log(`${this.username} has logged out`);
  }
}
class RegularUser extends User {
  constructor(username, password) {
    super(username, password);
    this.borrowLimit = 3;
    this.borrowPeriod = 14;
  }
}
class PremiumUser extends User {
  constructor(username, password) {
    super(username, password);
    this.borrowLimit = 5;
    this.borrowPeriod = 28;
  }
}
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
  browseBook(book) {
    if (this.books.includes(book)) {
      console.log(
        `${book.title} is found at index ${this.books.indexOf(book)}`
      );
    } else {
      console.log("Book is not found!");
    }
  }
  borrowBook(user, book) {
    if (user instanceof RegularUser) {
      if (user.borrowedBooks.length < user.borrowLimit) {
        console.log(`${book.title} borrowed by ${user.username}`);
        user.borrowedBooks.push(book);
      } else {
        console.log(
          `Cannot borrow book. ${user.username} has reached the borrowing limit.`
        );
      }
    }
    if (user instanceof PremiumUser) {
      if (user.borrowedBooks.length < user.borrowLimit) {
        console.log(`${book.title} borrowed by ${user.username}`);
        user.borrowedBooks.push(book);
      } else {
        console.log(
          `Cannot borrow book. ${user.username} has reached the borrowing limit.`
        );
      }
    }
  }

  returnBook(user, book) {
    const index = user.borrowedBooks.indexOf(book);
    if (index !== -1) {
      user.borrowedBooks.splice(index, 1); // removes book from the borrowed books array
      console.log(`${book.title} returned by ${user.username}`);
      
    } else {
      console.log(
        `Cannot return book. ${user.username} has not borrowed ${book.title}.`
      );
    }
  }
}

// Instantiate library class
const library = new Library();

// Create new books
const mathsTextbook = new Book("Maths Textbook", "David John", "4455679");
const englishTextbook = new Book("English Textbook", "Davidson John", "4455677");
const scienceTextbook = new Book("Science Textbook", "David Johnson", "4455675");
const techTextbook = new Book("Tech Textbook", "Davidson Johnson", "4455673");
const artTextbook = new Book("Art Textbook", "Davids John", "4455671");
const physicsTextbook = new Book("Physics Textbook", "Davids Johnson", "4455670");

// Add books to the library
library.addBook(mathsTextbook);
library.addBook(englishTextbook);
library.addBook(scienceTextbook);
library.addBook(techTextbook);
library.addBook(artTextbook);
library.addBook(physicsTextbook);

// Create new users (regular and premium)
const regularUser = new RegularUser("seyi", "hello");
const premiumUser = new PremiumUser("tope", "helloo");

// Regular user logging in to browse for a book
regularUser.login("seyi", "hello");
library.browseBook(englishTextbook);
regularUser.logout();

// Premium user borrowing books
premiumUser.login("tope", "helloo");
library.borrowBook(premiumUser, englishTextbook);
library.borrowBook(premiumUser, scienceTextbook);
library.borrowBook(premiumUser, techTextbook);
library.borrowBook(premiumUser, mathsTextbook);
library.borrowBook(premiumUser, artTextbook);
premiumUser.logout();

// Premium user trying to borrow another book after exceeding borrowing limit
premiumUser.login("tope", "helloo");
library.borrowBook(premiumUser, physicsTextbook);
premiumUser.logout();

// Regular user borrowing books
regularUser.login("seyi", "hello");
library.borrowBook(regularUser, englishTextbook);
library.borrowBook(regularUser, scienceTextbook);
library.borrowBook(regularUser, techTextbook);
regularUser.logout();

// Regular user trying to borrow another book after exceeding borrowing limit
regularUser.login("seyi", "hello");
library.borrowBook(regularUser, mathsTextbook);
regularUser.logout();

// Regular user returning a book
regularUser.login("seyi", "hello");
library.returnBook(regularUser, scienceTextbook);
regularUser.logout();

//Regular user trying to borrow another book after returning one
regularUser.login("seyi", "hello");
library.borrowBook(regularUser, mathsTextbook);
regularUser.logout();
