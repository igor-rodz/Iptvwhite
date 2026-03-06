import fs from 'fs';
const movies = [
    { br_name: "Stranger Things 5", query: "Stranger Things" },
    { br_name: "Vingadores: Doomsday", query: "Avengers: Doomsday" },
    { br_name: "Avatar: Fogo e Cinzas", query: "Avatar: Fire and Ash" },
    { br_name: "Superman", query: "Superman" },
    { br_name: "The Last of Us: Parte II", query: "The Last of Us" },
    { br_name: "Duna: Messias", query: "Dune Messiah" },
    { br_name: "Mandalorian & Grogu", query: "The Mandalorian & Grogu" },
    { br_name: "Missão Impossível 8", query: "Mission: Impossible - The Final Reckoning" },
    { br_name: "Casa do Dragão T3", query: "House of the Dragon" },
    { br_name: "Quarteto Fantástico", query: "The Fantastic Four: First Steps" }
];

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
};

async function scrape() {
    const results = {};
    for (const m of movies) {
        let attempts = 0;
        let success = false;
        while (attempts < 2 && !success) {
            const url = `https://www.themoviedb.org/search?query=${encodeURIComponent(m.query)}`;
            try {
                const res = await fetch(url, { headers });
                const html = await res.text();

                // Matches <img class="poster" ... src="/t/p/w94_and_h141_bestv2/xxxx.jpg"> or similar
                // Specifically look for data-src or src with /t/p/w
                const regex = /\/t\/p\/w[^/]+(\/[^"]+\.jpg)/g;
                const matches = [...html.matchAll(regex)];

                if (matches.length > 0) {
                    results[m.br_name] = `https://image.tmdb.org/t/p/w500${matches[0][1]}`;
                    success = true;
                } else {
                    if (attempts === 1) results[m.br_name] = "Not found";
                }
            } catch (e) {
                if (attempts === 1) results[m.br_name] = e.message;
            }
            attempts++;
            await new Promise(r => setTimeout(r, 1000));
        }
    }
    fs.writeFileSync('tmdb_images.json', JSON.stringify(results, null, 2));
}

scrape();
