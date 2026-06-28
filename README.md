# IOTB-TECH-GROUP-2

# Meal Finder 🍽️

A single-page app that lets you search, explore, and save meal recipes using the [TheMealDB API](https://www.themealdb.com/api.php) — free, no auth required.

Built as a Week 1 group project.

---

## Features

- Search meals by name with live results
- Loading, empty state, and error handling on every fetch
- Click any result to open a detail view (ingredients, instructions, category, origin)
- Save and remove favourites — persisted with `localStorage`
- Fully responsive layout built with Tailwind CSS

---

## Tech

- HTML / CSS / JavaScript
- Tailwind CSS
- TheMealDB API (`https://www.themealdb.com/api/json/v1/1`)
- `async/await` for all data fetching
- `localStorage` for favourites persistence

---

## Getting Started

No build step required. Just open `index.html` in your browser or use the Live Server extension in VS Code.

```bash
git clone https://github.com/your-org/meal-finder.git
cd meal-finder
# open index.html
```

---

## API

All data comes from TheMealDB — free, no API key needed.

| Endpoint | Used for |
|---|---|
| `/search.php?s={query}` | Search results |
| `/lookup.php?i={id}` | Detail view |

---

## Project Structure

```
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## Team

| Name | Role |
|---|---|
| [Name] | Fetch & search logic |
| [Name] | Results grid UI |
| [Name] | Detail view |
| [Name] | Favourites & styling |

---

## Live Demo

[Link here once deployed]
