import React from 'react'
import styles from './footer.module.css'

export default function FooterComp() {
  return (
    <footer className={`${styles['footer-container']}`}>
        <div className={`${styles['footer-image-container']}`}><img src="/klukai.png" alt="image of Klukai" /></div>
        <div className={`${styles['footer-texts-container']}`}>
          <h1>Made by: アペイロス</h1>
          <h1>References:</h1>
          <ul>
            <li><a href="https://www.zerochan.net/3014747#full">ZeroChan M4a1 Image Link</a></li>
            <li><a href="https://iopwiki.com/wiki/Klukai#/media/File:GFL2_Klukai_emotes.png">IOP Klukai Image Link</a></li>
          </ul>
        </div>
    </footer>
  )
}
