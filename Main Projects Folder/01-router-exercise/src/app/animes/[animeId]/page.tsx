import { ANIME_NAMES, ANIME_REVIEWS } from "@/app/animeData"
import style from './global.module.css';

export default async function animePage({params} : {
    params: Promise<{ animeId: number }>
}){
    return (
        <div className={style['page-container']}>
            <div className={style['anime-container']}>
                <img className={style['anime-image']} src={`/animeImages/anime${(await params).animeId}.jpg`} alt={`Image of ${ANIME_NAMES[(await params).animeId]}`} />
                <h1>Anime Name: {ANIME_NAMES[(await params).animeId]}</h1>
                <a href="/">Go back?</a>
            </div>
            <div className={style['review-container']}>
                <h1>Reviews</h1>
                <ul className={style['review-list']}>
                    {ANIME_REVIEWS[(await params).animeId].map((reviews, idx)=>(
                        <li className={style['reviews']} key={idx}> 
                            <div className={style['user-card']}>
                                <img className={style['user-image']} src="/anon.png" alt="image of anon" />
                                <h2>Anon User</h2>
                            </div>
                            <p className={style['review-comment']}>{reviews}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}