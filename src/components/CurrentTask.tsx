"use client";

import { useState } from "react";
import { Button } from "@once-ui-system/core";
import { HiArrowDownTray, HiXMark } from "react-icons/hi2";

import styles from "./CurrentTask.module.scss";

export const CurrentTask = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className={styles.toast} role="status" aria-live="polite" aria-label="Téléchargement du CV">
      <div className={styles.topRow}>
        <div className={styles.liveBadge}>
          <span className={styles.liveDot} aria-hidden="true" />
          <span className={styles.liveLabel}>CV</span>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsVisible(false)}
          aria-label="Masquer la notification de téléchargement du CV"
        >
          <HiXMark className={styles.closeIcon} aria-hidden="true" focusable="false" />
        </button>
      </div>

      <div className={styles.content}>
        <HiArrowDownTray className={styles.icon} aria-hidden="true" focusable="false" />
        <p className={styles.text}>
          Téléchargez mon CV en PDF pour en savoir plus sur mon profil.
        </p>
      </div>

      <div className={styles.actions}>
        <Button
          href="/CV-Sainton-Loic.pdf"
          variant="secondary"
          size="s"
          prefixIcon="download"
          download
        >
          Télécharger le CV
        </Button>
      </div>
    </aside>
  );
};