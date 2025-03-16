#!/usr/bin/env node

import axios from 'axios';
import { program } from 'commander';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

async function getmovies(endpoint){
    try {
        const response = await axios.get(`${BASE_URL}/movie/${endpoint}`, {
            params: {
                apiKey: API_KEY
            },
        });

        const movies = response.data;

        if (movies.length === 0) {
            console.log("")
        }
    } catch (error) {
        
    }
}