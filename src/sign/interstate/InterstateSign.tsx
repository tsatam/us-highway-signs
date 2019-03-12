import * as React from 'react';

import {Props} from '../Props';
import styles from './InterstateSign.module.css';

function Shield(B: number, H: number, N: number, J: number) {
    return <>
        <path
            d={`M 0 ${B / -2}
                a ${H} ${H} 0 0 0 ${N} 0
                A ${J} ${J} 0 0 1 0 ${B / 2}
                z`}
        />
        <path
            d={`M 0 ${B / -2}
                a ${H} ${H} 0 0 1 ${-N} 0
                A ${J} ${J} 0 0 0 0 ${B / 2}
                z`}
        />
    </>;
}

export function InterstateSign(props: Props) {
    const is3Digit = props.routeNumber.length > 2;

    const
        A = is3Digit ? 60 : 48,
        B = 48,
        C = 1,
        D = 15.375,
        E = 20,
        F = 11,
        G = 10,
        H = is3Digit ? 48 : 30,
        J = is3Digit ? 34 : 30,
        K = 4,
        L = 5,
        M = is3Digit ? 21.818 : 15.307,

        N = is3Digit ? 26.8: 17.62,
        P = is3Digit ? 27.4 : 21.92;

    console.log(A, B, C, D, E, F, G, H, J, K, L, M, N, P);

    return <svg className={styles.sign} viewBox={[
        A / -2,
        B / -2,
        A,
        B
    ].join(' ')}>
        <defs>
            <clipPath id="shieldInnerBlueClip">
                <rect x={A / -2} y={(B / -2) + G + C} width={A} height={B - G - C}/>
            </clipPath>
            <clipPath id="shieldInnerRedClip">
                <rect x={A / -2} y={B / -2} width={A} height={G}/>
            </clipPath>
        </defs>

        <g className={styles.shieldOuter}>
            {Shield(B, H, N, J)}
        </g>
        <g className={`${styles.shieldInnerBlue} ${is3Digit ? styles.shieldInner3Digit : ''}`} clipPath="url(#shieldInnerBlueClip)">
            {Shield(B, H, N, J)}
        </g>
        <g className={`${styles.shieldInnerRed} ${is3Digit ? styles.shieldInner3Digit : ''}`} clipPath="url(#shieldInnerRedClip)">
            {Shield(B, H, N, J)}
        </g>

        <text
            x="0"
            y={(B / -2) + K}
            className={styles.interstateLabel}
        >INTERSTATE
        </text>

        <text
            className={`${styles.text} ${is3Digit ? styles.text3Digit : ''}`}
            x="0"
            y={(B / -2) + D}
        >
            {props.routeNumber}
        </text>
    </svg>;
}