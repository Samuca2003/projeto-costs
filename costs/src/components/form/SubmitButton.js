import styles from './SubmitButton.module.css'

import React from "react"

function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>Criar projeto</button>
    </div>
  )
}

export default SubmitButton