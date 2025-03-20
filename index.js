#!/usr/bin/env node

import axios from 'axios';
import { program } from 'commander';
import Table from 'cli-table3';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Define the endpoints
const ENDPOINTS = {
    popular: "popular",
    top: "top_rated",
    playing: "now_playing",
    upcoming: "upcoming",
};

// Function to fetch movies
async function getmovies(type){
    try {
        const endpoint = ENDPOINTS[type];

        if (!endpoint) {
            console.log("Invalid type! Use: popular, top, playing, upcoming");
            return;
        }

        const response = await axios.get(`${BASE_URL}/movie/${endpoint}`, {
            params: {
                api_key: API_KEY
            },
        });

        const movies = response.data.results;
        
        if (movies.length === 0) {
            console.log("No movies found.");
            return;
        }

        // Table for structured output
        const table = new Table({
            head: [ '#', 'Title', 'Release Date', 'Rating' ],
            colWidths: [4, 40, 15, 10]
        });

        // Add each movie to the table
        movies.forEach((movie, index) => {
            // Format rating
            const rating = movie.vote_average.toFixed(1);
            let ratingText;

            if (rating >= 8) {
                ratingText = `${rating}/10`;
            } else if (rating >= 6) {
                ratingText = `${rating}/10`;
            } else {
                ratingText = `${rating}/10`;
            }

            table.push([
                index + 1,
                movie.title,
                movie.release_date,
                ratingText
            ]);
        });

        // Print the table
        console.log(`\n🎬 ${type.charAt(0).toUpperCase() + type.slice(1)} Movies:\n`)
        console.log(table.toString());
    } catch (error) {
        console.log("Error fetching movies:", error.message);
    }
}

// Define the command-line interface
program
    .version('1.0.0')
    .description('TMDB CLI')
    .option("--type <type>", "Type of movies (popular, top, playing, upcoming)")
    .action((options) => {
        getmovies(options.type);
    });

// Parse the command-line arguments
program.parse(process.argv);