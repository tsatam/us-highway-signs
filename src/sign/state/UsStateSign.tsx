import React from 'react';

import {UsState} from '../../model/UsState';
import {UnknownSign} from '../UnknownSign';
import {MichiganStateSign} from './michigan/MichiganStateSign';

import {Props} from '../Props';

export function UsStateSign(props: Props) {
    switch (props.state) {
        case UsState.MICHIGAN:
            return <MichiganStateSign {...props}/>;
        default:
            return <UnknownSign {...props}/>;
    }
}