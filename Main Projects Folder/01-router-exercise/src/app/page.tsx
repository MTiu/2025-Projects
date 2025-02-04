import { ANIME_NAMES } from "./animeData"; 

export default function Home() {
    return (
        <div>
            <h1>Welcome to a small Anime blogsite</h1>
            <ul>
                {ANIME_NAMES.map((anime: string, idx) => (
                    <li key={idx}>
                        <a href={`/animes/${idx}`}>{anime}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
