import fs from 'fs';

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
};

async function scrape() {
    let url = "https://www.themoviedb.org/tv/66732-stranger-things/season/5";
    try {
        const res = await fetch(url, { headers });
        const html = await res.text();
        const regex = /\/t\/p\/w[^/]+(\/[^"]+\.jpg)/g;
        const matches = [...html.matchAll(regex)];
        if (matches.length > 0) {
            console.log(`ST5: https://image.tmdb.org/t/p/w500${matches[0][1]}`);
        } else {
            console.log("Not found");
        }
    } catch (e) {
        console.error(e.message);
    }
}

scrape();
