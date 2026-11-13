# BookHub

## Overview

BookHub is a React-based web application that allows users to discover books using the Google Books API. Users can search for books, view detailed information about individual titles and search through categories.

This project demonstrates the use of React components, React Router, asynchronous API requests, Bootstrap for responsive design and local storage for data persistence.



## Features

### Search Books

- Search for books by title, author or keyword
- Retrieve book data from the Google Books API
- Display results in a responsive card layout

### View Book Details

- Access detailed information for each book
- View book cover, author(s), publisher, published date, categories and description
- Navigate directly from search results

### Categories

- Browse by categories
- Access details directly

### Responsive Design

- User friendly interface
- Built using Bootstrap 5 components and utilities


## Technologies Used

- React
- React Router DOM
- Bootstrap 5
- JavaScript
- Google Books API
- HTML
- CSS
- Vite



## Installation

### Prerequisites

Before running this project, ensure that the following software is installed:

- Node.js
- npm (included with Node.js)


## Clone the Repository

git clone <repository\-url>

cd bookhub

Or simply download ZIP file, extract and open the project folder in Visual Studio Code.


## Install Dependencies

Open Terminal and run the following command from the project root directory:

npm install

This will install all required project dependencies defined in package.json.


## Additional Dependencies

If React Router DOM and Bootstrap have not already been installed, run:

npm install react\-router\-dom bootstrap


## Start the Development Server

To launch the application in development mode:

npm run dev

You should see output similar to:

VITE vX.X.X ready in XXX ms

➜ Local:  http://localhost:4173/bookhub/

Open the displayed URL in your browser.


## API Information

This project uses the Google Books API to retrieve book information.

The API returns information including:

- Book title
- Authors
- Cover image
- Publisher
- Published date
- Categories
- Description

