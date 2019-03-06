import {Props} from './Props';
import styles from './UnknownSign.module.css';
import React from 'react';

export function UnknownSign(props: Props) {
    return <svg className={styles.sign} viewBox={'-500 -500 1000 1000'}>
        <circle cx="0" cy="0" r="450"/>

        <text
            textAnchor="middle"
            dominantBaseline="middle"
            x="0"
            y="0"
        >
            {props.routeNumber}
        </text>
    </svg>;
}