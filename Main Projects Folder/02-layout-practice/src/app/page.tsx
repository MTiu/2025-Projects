import styles from './home.module.css'

export default function Home() {
  return (
    <div className={`${styles['home-container']}`}>
      <div className={`${styles['hero-image-container']}`}>
        <img className={`${styles['hero-image']}`} src="/M4a1.png" alt="Image of M4a1" />
      </div>
      <div className={`${styles['hero-text-container']}`}>
        <h1>Welcome to Apeiros List</h1>
        <p>This is made only for the purpose of practicing layouts feature of NextJS as well as practicing NextJS as a whole</p>
        <a href="/anime-list">Go to anime list</a>
      </div>
    </div>
  );
}
