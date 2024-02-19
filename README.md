# Bloger - A Node.js Blogging Website

Bloger is a simple blogging website built using Node.js, Express.js, and EJS. It allows users to sign up, log in securely using JWT authentication, add blog posts, and engage with other users by adding comments to the posts.

## Features

- User Signup: Users can register for a new account with a unique username and password.
- User Login: Registered users can securely log in using JWT authentication.
- Add Blog: Authenticated users can create and publish their blog posts.
- Add Comments: Users can interact with blog posts by adding comments.

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

To run the Bloger project locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/vishalpathakcodes/Bloger.git
   ```

2. Navigate to the project directory:

   ```
   cd Bloger
   ```

3. Install the dependencies using npm:

   ```
   npm install
   ```

4. Start the server:

   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:8000` to view the Bloger website.

## Folder Structure

```
Bloger/
│
├── controllers/        # Controllers handling routes and business logic
├── models/             # Data models for MongoDB
├── public/             # Static files (stylesheets, client-side JavaScript)
├── routes/             # Route definitions
├── views/              # EJS templates for rendering HTML
├── .gitignore          # Specifies intentionally untracked files to ignore
├── app.js              # Entry point for the application
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- MongoDB (as the database)
- JWT (JSON Web Tokens) for authentication

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

## Contact

If you have any questions or suggestions regarding the project, feel free to contact us at [vishalpathakdtu@gmail.com].

Happy Blogging! 🚀
