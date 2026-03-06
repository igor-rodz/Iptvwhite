import fs from 'fs';

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
};

async function scrape() {
    let url = "https://www.themoviedb.org/tv/66732-stranger-things/season/5";
    try {
        const res = await fetch(url, { headers });
        const html = await res.text();
        const regex = /\/t\/p\/[a-zA-Z0-9_]+(\/[a-zA-Z0-9_]+\.jpg)/g;
        const matches = [...html.matchAll(regex)];

        let unique = new Set(matches.map(m => m[1]));
        console.log("Found posters:");
        for (let path of unique) {
            console.log(`https://image.tmdb.org/t/p/w500${path}`);
        }
    } catch (e) {
        console.error(e.message);
    }
}

scrape();
