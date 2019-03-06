import {HighwaySystem} from '../model/HighwaySystem';
import {UsState} from '../model/UsState';

export interface Props {
    system: HighwaySystem,
    state?: UsState,
    routeNumber: string
}