import * as React from 'react';

import {Props} from '../Props';

import styles from './UsHighwaySign.module.css';

export function UsHighwaySign(props: Props) {
    const is3Digit = props.routeNumber.length > 2;

    const
        A = is3Digit ? 60 : 48,
        B = 48,
        E = 13,
        F = is3Digit ? 8 : 2,
        G = 11,
        H = 5,
        J = 15,
        K = is3Digit ? 20 : 14,
        L = is3Digit ? 19 : 11,
        M = 9,
        N = 1,
        P = 3;


    return <svg className={styles.sign} viewBox={[
        A / -2,
        B / -2,
        A,
        B
    ].join(' ')}>
        <rect className={styles.backdrop}
              x={A / -2}
              y={B / -2}
              width={A}
              height={B}
              rx={P} ry={P}
        />
        <g className={styles.shield}>
            <path
                d={`M 0 ${(B / -2) + N}
                    a ${L} ${L} 0 0 0 ${K} 0
                    l ${M} ${M}
                    a ${J} ${J} 0 0 0 -1 14
                    A ${E} ${E} 0 0 1 ${(A / 2) - N} ${(B / 2) - (E + H)}
                    a ${E} ${E} 0 0 1 ${-E} ${E}
                    l ${-F} 0
                    A ${G} ${G} 0 0 0 0 ${(B / 2) - N}
                    l ${-1} ${-1}
                    z`}
            />
            <path
                d={`M 0 ${(B / -2) + N}
                    a ${L} ${L} 0 0 1 ${-K} 0
                    l ${-M} ${M}
                    a ${J} ${J} 0 0 1 1 14
                    A ${E} ${E} 0 0 0 ${(A / -2) + N} ${(B / 2) - (E + H)}
                    a ${E} ${E} 0 0 0 ${E} ${E}
                    l ${F} 0
                    A ${G} ${G} 0 0 1 0 ${(B / 2) - N}
                    z`}
            />
        </g>

        <text
            className={styles.text}
            x="0"
            y={(B / 2) - E + 4}
        >
            {props.routeNumber}
        </text>
    </svg>;
}