import React from 'react'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className={`${styles["footer"]} bg-dark`}>
        <ul className={`${styles["footer-list-container"]} p-2`}>
            <li className={`${styles["footer-list-item"]}`}>Matthew Justine T. Tiu</li>
            <li className={`${styles["footer-list-item"]}`}>
              <a className={`${styles["footer-list-link"]}`} href="mailto:mattjtiu@gmail.com?subject=Hello!&body=Hi, I'd like to get in touch" >
                <FontAwesomeIcon icon={ faEnvelope }/><span className={`${styles["footer-list-span"]}`}>Email me!</span>
              </a> <span className={`${styles["footer-link-name"]}`}>| mattjtiu@gmail.com</span>
            </li>
            <li className={`${styles["footer-list-item"]}`}>
              <a className={`${styles["footer-list-link"]}`} href='https://www.linkedin.com/in/matthew-tiu-70b72a2a7/'>
                <FontAwesomeIcon icon={ faLinkedin } /><span className={`${styles["footer-link-name"]}`}>LinkedIn</span>
              </a>
            </li>
        </ul>
    </div>
  )
}
