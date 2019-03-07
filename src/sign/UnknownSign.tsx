import {Props} from './Props';
import styles from './UnknownSign.module.css';
import React from 'react';

export function UnknownSign(props: Props) {
    return <svg className={styles.sign} viewBox={'-512 -512 1024 1024'}>
        <rect className={styles.backdrop} x="-512" y="-512" width="1024" height="1024" rx="64" ry="64"/>

        <circle className={styles.circle} cx="0" cy="0" r="491"/>

        <text
            className={`${styles.text} ${props.routeNumber.length > 2 ? styles.text3Digit : undefined}`}
            textAnchor="middle"
            dominantBaseline="middle"
            x="0"
            y="75"
        >
            {props.routeNumber}
        </text>
    </svg>;
}