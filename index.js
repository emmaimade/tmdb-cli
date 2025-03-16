#!/usr/bin/env node

import axios from 'axios';
import { program } from 'commander';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

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
    .option("--type <type>", "Type of movies (popular, top, playing, upcoming)")
    .action((options) => {
        if (!options.type) {
            console.log("Please specify a valid type of movie from popular, top, playing, upcoming");
            return;
        }
        getmovies(options.type);
    });

// Parse the command-line arguments
program.parse(process.argv);