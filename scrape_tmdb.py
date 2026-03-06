import urllib.request
import re
import urllib.parse
import sys

movies = [
    ("Stranger Things 5", "Stranger Things"),
    ("Vingadores: Doomsday", "Avengers: Doomsday"),
    ("Avatar: Fogo e Cinzas", "Avatar: Fire and Ash"),
    ("Superman", "Superman 2025"),
    ("The Last of Us: Parte II", "The Last of Us"),
    ("Duna: Messias", "Dune Messiah"),
    ("Mandalorian & Grogu", "The Mandalorian & Grogu"),
    ("Missão Impossível 8", "Mission: Impossible - The Final Reckoning"),
    ("Casa do Dragão T3", "House of the Dragon"),
    ("Quarteto Fantástico", "The Fantastic Four: First Steps")
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for br_name, query in movies:
    q = urllib.parse.quote(query)
    url = f"https://www.themoviedb.org/search?query={q}"
    req = urllib.request.Request(url, headers=headers)
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # We look for /t/p/w.../something.jpg
        # Example from tmdb search result: class="poster" src="/t/p/w94_and_h141_bestv2/xyz.jpg" or data-src=...
        
        # we just want the poster path: /abcde.jpg
        # Let's find all jpgs
        paths = re.findall(r'/t/p/[^/]+(/[^"]+\.jpg)', html)
        if paths:
            # Paths might be duplicates, just get the first valid looking one
            # The first search result poster is usually what we want
            print(f"{br_name}: https://image.tmdb.org/t/p/w500{paths[0]}")
        else:
            print(f"{br_name}: Not found")
            
    except Exception as e:
        print(f"Error for {br_name}: {e}")
