"use client";

import { useState } from "react";
import { HiOutlineCodeBracket, HiXMark } from "react-icons/hi2";

import styles from "./CurrentTask.module.scss";

export const CurrentTask = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className={styles.toast} role="status" aria-live="polite" aria-label="Projet en cours">
      <div className={styles.topRow}>
        <div className={styles.liveBadge}>
          <span className={styles.liveDot} aria-hidden="true" />
          <span className={styles.liveLabel}>Live</span>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsVisible(false)}
          aria-label="Masquer la notification du projet en cours"
        >
          <HiXMark className={styles.closeIcon} aria-hidden="true" focusable="false" />
        </button>
      </div>

      <div className={styles.content}>
        <HiOutlineCodeBracket className={styles.icon} aria-hidden="true" focusable="false" />
        <p className={styles.text}>
          Projet en cours : Développement d'un Flow Free (réflexion algorithmique 'from scratch')
        </p>
      </div>
    </aside>
  );
};