import * as React from 'react';

import styles from './Sign.module.css';
import {Props} from './Props';
import {HighwaySystem} from '../model/HighwaySystem';
import {UnknownSign} from './UnknownSign';
import {UsStateSign} from './state/UsStateSign';
import {UsHighwaySign} from './us-highway/UsHighwaySign';

function RenderSign(props: Props) {
    switch (props.system) {
        case HighwaySystem.US_HIGHWAY: {
            return <UsHighwaySign {...props}/>;
        }
        case HighwaySystem.STATE: {
            return <UsStateSign {...props}/>;
        }
        default: {
            return <UnknownSign {...props}/>;
        }
    }
}

export function Sign(props: Props) {
    return <div className={styles.signWrapper}>
        <RenderSign {...props}/>
    </div>;
}