# Football App using Node.js and MySQL

This is a web application for football lovers. Users can create and join teams, create and join leagues, and keep track of their favorite teams' performance.

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS templating engine
- Bootstrap CSS framework

## Features

- User authentication (register, login, logout)
- Create and join teams
- Create and join leagues
- View team and league details
- View league table and team fixtures
- View upcoming matches and results
- Search for teams and leagues
- Update user profile

## Installation

1. Clone the repository: `git clone https://github.com/your-username/football-app.git`
2. Change into the project directory: `cd football-app`
3. Install dependencies: `npm install`
4. Create a `.env` file and configure the environment variables. Example:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=football
SESSION_SECRET=your-secret
```

5. Create the MySQL database and tables using the provided `schema.sql` file.
6. Start the server: `npm start`
7. Visit http://localhost:3000 in your web browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

