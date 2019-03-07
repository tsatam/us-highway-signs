import {Props} from '../../Props';
import React from 'react';

import styles from './MichiganStateSign.module.css';

export function MichiganStateSign(props: Props) {
    return <svg className={styles.sign} viewBox={'-500 -500 1000 1000'}>
        <rect className={styles.backdrop} x="-500" y="-500" width="1000" height="1000" rx="150" ry="150"/>
        <rect className={styles.diamond}
              x="-340"
              y="-340"
              width="680"
              height="680"
              rx="10"
              ry="10"
        />

        <path
            className={styles.blockM}
            d="M 0,0
            m 0,-190
            48,-48
            0,40
            -20,0
            0,40
            88,0
            0,-40
            -20,0
            0,-72
            20,0
            0,-40
            -68, 0
            -48,48
            -48,-48
            -68,0
            0,40
            20,0
            0,72
            -20,0
            0,40
            88,0
            0,-40
            -20,0
            0,-40
            48,48
            z"
        />

        <text
            className={props.routeNumber.length > 2 ? styles.text3Digit : undefined}
            textAnchor="middle"
            dominantBaseline="middle"
            x="0"
            y="100"
        >
            {props.routeNumber}
        </text>
    </svg>;
}