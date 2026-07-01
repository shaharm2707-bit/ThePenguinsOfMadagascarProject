# 🐧 Penguins Of Madagascar API

## Authors

Name: Shahar Mazuz 
ID: 325332336
Name: Tohar Israel Banano
ID: 211986070

---

## Project Description

This project is a Node.js API inspired by the 4 Penguins from the dreamworks movie - Madagascar.

The API provides information about the penguin agents, it allows searching for a specific penguin by ID, and recruits random dog breeds candidates using an external API.

---

## Technologies

* Node.js
* Express.js
* GitHub
* External API (Dog API)

---

## Installation

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

---

## API Routes

### Get all penguins

```http
GET /api/penguins
```

Returns a list of all penguin agents.

### Get penguin by ID

```http
GET /api/penguins/:id
```

Returns a specific penguin.

Example:

```http
GET /api/penguins/1
```

### Recruit a new animal

```http
GET /api/recruit
```

Uses an external API to display a random dog recruit candidate.

---

## External API

Dog API

https://dog.ceo/dog-api/

---

## GitHub Repository

This project is managed using Git and GitHub.
