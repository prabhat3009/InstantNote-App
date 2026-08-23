Please find the live deployed link here: https://instantnote-app.onrender.com

# InstantNote App

A full-stack note management application built as a self-practice project with React, MongoDB, Express, and Node.js. Users can create, browse, edit, and delete notes organized by category.

## Project Background

This project was made to develop a genuine understanding of React, MongoDB, Express, and Node.js. It was built using the documentation available at the time, without the help of any LLMs. Some implementation details may therefore be imperfect or outdated compared with current best practices.

## Features

- Create notes with a category, title, content, and optional date
- View all notes and open an individual note
- Edit and delete existing notes
- React Router navigation between the main views
- REST API backed by MongoDB and Mongoose

## Tech Stack

- **Frontend:** React 18, React Router, Axios, Material UI
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas
- **Development:** Create React App and Nodemon

## Project Structure

```text
client/
  src/components/   React views and shared UI components
  src/service/      Axios API client
server/
  controller/       Request handlers for note CRUD operations
  database/         MongoDB connection
  routes/           Express routes
  schema/           Mongoose note schema
```

## Setup

### Prerequisites

- Node.js and npm
- A MongoDB Atlas connection with access from your development IP

### Install dependencies

Run these commands from the project root:

```bash
cd server
npm install

cd ../client
npm install
```

### Configure the server

Create `server/.env` with your MongoDB credentials:

```env
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
PORT=8000
```

### Run the application

Start the backend in one terminal:

```bash
cd server
npm start
```

Start the frontend in another terminal:

```bash
cd client
npm start
```

The frontend runs at [http://localhost:3000](http://localhost:3000) and calls the API at `http://localhost:8000`.

## API Endpoints

The Express API is served from `http://localhost:8000`:

| Method   | Endpoint | Purpose          |
| -------- | -------- | ---------------- |
| `POST`   | `/add`   | Create a note    |
| `GET`    | `/all`   | Return all notes |
| `GET`    | `/:id`   | Return one note  |
| `PUT`    | `/:id`   | Update a note    |
| `DELETE` | `/:id`   | Delete a note    |

Example request body:

```json
{
  "category": "Work",
  "title": "Project ideas",
  "content": "Review the next iteration.",
  "date": "2026-08-23"
}
```

## Available Scripts

In `client/`:

- `npm start` starts the React development server
- `npm test` runs the Create React App test runner
- `npm run build` creates a production build

In `server/`:

- `npm start` starts the API with Nodemon

## Current Limitations

- The frontend reads its API base URL from `REACT_APP_API_URL`. Create a
  `client/.env` file for local overrides, or configure the variable in the
  frontend's deployment environment. If it is omitted, it defaults to
  `http://localhost:8000` for local development.
- Authentication and authorization are not implemented.
- Automated test coverage is limited, and the server does not currently define a test suite.
- Request validation and production error handling could be strengthened.
