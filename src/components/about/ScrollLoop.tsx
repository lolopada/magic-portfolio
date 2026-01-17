"use client";

import React from "react";
import styles from "./ScrollLoop.module.scss";

interface ScrollLoopProps<T> {
    items: T[];
    renderItem: (item: T, key: string) => React.ReactNode;
    direction?: "left" | "right";
}

export default function ScrollLoop<T>({ items, renderItem, direction = "left" }: ScrollLoopProps<T>) {
    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.inner} ${direction === "right" ? styles.reverse : ""}`}
            >
                {items.map((item, index) => renderItem(item, `original-${index}`))}
                {items.map((item, index) => renderItem(item, `duplicate-${index}`))}
            </div>
        </div>
    );
}
