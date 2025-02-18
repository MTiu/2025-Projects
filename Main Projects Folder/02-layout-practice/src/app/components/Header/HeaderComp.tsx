import React from 'react'
import styles from './header.module.css'

export default function HeaderComp() {
  return (
    <header className={`${styles['header-container']}`}>
        <h1>@アペイロス</h1>
    </header>
  )
}
