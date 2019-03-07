import {Props} from '../../Props';
import React from 'react';

import styles from './MichiganStateSign.module.css';

export function MichiganStateSign(props: Props) {
    return <svg className={styles.sign} viewBox={'-512 -512 1024 1024'}>
        <rect className={styles.backdrop} x="-512" y="-512" width="1024" height="1024" rx="64" ry="64"/>
        <rect className={styles.diamond}
              x="-346"
              y="-346"
              width="686"
              height="686"
        />

        <path
            className={styles.blockM}
            d="M 0,0
            m 0,-210
            52,-52
            0,60
            -15,0
            0,40
            64,0
            0,-40
            -15,0
            0,-72
            15,0
            0,-40
            -50, 0
            -52,52
            -52,-52
            -50,0
            0,40
            15,0
            0,72
            -15,0
            0,40
            64,0
            0,-40
            -15,0
            0,-60
            52,52
            z"
        />

        <text
            className={`${styles.text} ${props.routeNumber.length > 2 ? styles.text3Digit : undefined}`}
            textAnchor="middle"
            dominantBaseline="middle"
            x="0"
            y="100"
        >
            {props.routeNumber}
        </text>
    </svg>;
}