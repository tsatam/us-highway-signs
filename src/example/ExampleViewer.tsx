import React, {ChangeEvent} from 'react';

import {HighwaySystem} from '../model/HighwaySystem';

import styles from './ExampleViewer.module.css';
import {Sign} from '../sign/Sign';
import {UsState} from '../model/UsState';

interface State {
    system: HighwaySystem
    state?: UsState
    routeNumber: string
}

export class ExampleViewer extends React.Component<{}, State> {
    state = {
        system: HighwaySystem.INTERSTATE,
        state: undefined,
        routeNumber: ''
    };

    constructor(props: Readonly<{}>) {
        super(props);

        this.onChangeSystem = this.onChangeSystem.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeRouteNumber = this.onChangeRouteNumber.bind(this);
    }

    render() {
        return <div className={styles.exampleSign}>
            <div className={styles.display}>
                <div className={styles.displayInner}>
                    <Sign system={this.state.system} routeNumber={this.state.routeNumber} state={this.state.state}/>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.sidebarInner}>
                    <div className={styles.sidebarElement}>
                        <span>Highway System</span>
                        <select value={this.state.system} onChange={this.onChangeSystem}>
                            <option value={HighwaySystem.INTERSTATE}>Interstate</option>
                            <option value={HighwaySystem.US_HIGHWAY}>U.S. Highway</option>
                            <option value={HighwaySystem.STATE}>State</option>
                        </select>
                    </div>
                    {
                        this.state.system === HighwaySystem.STATE &&
                        <div className={styles.sidebarElement}>
                            <span>State</span>
                            <select value={this.state.state} onChange={this.onChangeState}>
                                <option value={undefined}>-</option>
                                <option value={UsState.MICHIGAN}>Michigan</option>
                            </select>
                        </div>
                    }
                    <div className={styles.sidebarElement}>
                        <span>Route Number</span>
                        <input value={this.state.routeNumber} onChange={this.onChangeRouteNumber} maxLength={3}/>
                    </div>
                </div>
            </div>
        </div>;
    }

    private onChangeSystem(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({system: event.target.value as HighwaySystem});
    }

    private onChangeState(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({state: event.target.value as UsState});
    }

    private onChangeRouteNumber(event: ChangeEvent<HTMLInputElement>) {
        this.setState({routeNumber: event.target.value});
    }
}