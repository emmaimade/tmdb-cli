#!/usr/bin/env node

import axios from 'axios';
import { program } from 'commander';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch movies
async function getmovies(endpoint){
    try {
        const response = await axios.get(`${BASE_URL}/movie/${endpoint}`, {
            params: {
                apiKey: API_KEY
            },
        });

        const movies = response.data;
        console.log(movies);

        if (movies.length === 0) {
            console.log("")
        } else {
            movies.forEach((movie, index) => {
                console.log(`${index + 1}: ${movie.title} (${movie.release_date})`);
            });
        }
    } catch (error) {
        console.log("Error fetching movies:", error);
    }
}

// Define the command-line interface
program
    .version('1.0.0')
    .description('TMDB CLI')
    .option("--type <type>", "Type of movies (popular, top_rated, now_playing, upcoming)")
    .action((options) => {
        if (!options.type) {
            console.log("Please specify a valid type of movie from popular, top_rated, now_playing, upcoming");
            return;
        }
        getmovies(options.type);
    });

// Parse the command-line arguments
program.parse(process.argv);