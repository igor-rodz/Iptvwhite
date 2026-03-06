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
    for (const m of movies) {
        const url = `https://www.themoviedb.org/search?query=${encodeURIComponent(m.query)}`;
        try {
            const res = await fetch(url, { headers });
            const html = await res.text();

            // Look for the first poster image path.
            // In TMDB search results, posters are inside <img class="poster" ... src="/t/p/w.../xxxx.jpg"> or data-src
            const regex = /\/t\/p\/w[^/]+(\/[^"]+\.jpg)/g;
            const matches = [...html.matchAll(regex)];

            if (matches.length > 0) {
                // Return the first match's core path (group 1)
                console.log(`${m.br_name}: https://image.tmdb.org/t/p/w500${matches[0][1]}`);
            } else {
                console.log(`${m.br_name}: Not found`);
            }

            // Small delay to avoid triggering rate limit immediately
            await new Promise(r => setTimeout(r, 1000));
        } catch (e) {
            console.error(`Error for ${m.br_name}: ${e.message}`);
        }
    }
}

scrape();
