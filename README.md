# TMDB CLI

A simple command-line interface (CLI) tool to fetch and display movie listings from The Movie Database (TMDB) API.

## Features
- Fetch movies by category: `popular`, `top rated`, `now playing`, and `upcoming`.
- Display results in a structured table format using `cli-table3`.
- Easy-to-use CLI interface with options.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- An API key from [TMDB](https://www.themoviedb.org/settings/api)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/emmaimade/tmdb-cli.git
   cd tmdb-cli
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following line, replacing `YOUR_TMDB_API_KEY` with your actual API key:
   
     ```sh
     TMDB_API_KEY=YOUR_TMDB_API_KEY
     ```

4. **Link the CLI globally:**
   ```sh
   npm link
   ```
   
## Dependencies
- `axios` - To make API requests.
- `commander` - To handle CLI commands.
- `cli-table3` - For structured table output.
- `dotenv` - To manage environment variables.

## Error Handling
- If an invalid movie type is provided, an error message is displayed.
- If the API request fails, the error message is shown.
- If no movies are found, a message is displayed instead of an empty table.


## Usage

Run the following commands to fetch movie data:

```sh
# Get now playing movies
 tmdb-app --type "playing"

# Get popular movies
 tmdb-app --type "popular"

# Get top-rated movies
 tmdb-app --type "top"

# Get upcoming movies
 tmdb-app --type "upcoming"
```

## Example Output
```
🎬 Popular Movies:
┌────┬────────────────────────────────────────┬───────────────┬──────────┐
│  # │ Title                                  │ Release Date  │ Rating   │
├────┼────────────────────────────────────────┼───────────────┼──────────┤
│  1 │ The Batman                             │ 2022-03-04    │ 8.2/10   │
│  2 │ Spider-Man: No Way Home                │ 2021-12-17    │ 8.5/10   │
│  3 │ Dune                                   │ 2021-10-22    │ 8.1/10   │
└────┴────────────────────────────────────────┴───────────────┴──────────┘
```

## Troubleshooting
- If `tmdb-app` is not recognized, try running `npm link` again.
- Ensure your `.env` file contains a valid `TMDB_API_KEY`.
- Check for typos in the command arguments.

---
Happy movie browsing! 🎬

