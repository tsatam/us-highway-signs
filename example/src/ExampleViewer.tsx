import React, {ChangeEvent} from 'react';

import Sign, {HighwaySystem, UsState} from 'us-highway-signs';

import styles from './ExampleViewer.module.css';

interface State {
    system: HighwaySystem
    state?: UsState
    routeNumber: string
}

export class ExampleViewer extends React.Component<{}, State> {
    state = {
        system: HighwaySystem.INTERSTATE,
        state: undefined,
        routeNumber: '1'
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
                    <div className={styles.signContainer}>
                        <Sign system={this.state.system} routeNumber={this.state.routeNumber} state={this.state.state}/>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.sidebarInner}>
                    <div className={styles.sidebarElements}>
                        <div className={styles.sidebarElement}>
                            <span className={styles.signText}>HIGHWAY SYSTEM</span>
                            <select className={styles.input} value={this.state.system} onChange={this.onChangeSystem}>
                                <option value={HighwaySystem.INTERSTATE}>Interstate</option>
                                <option value={HighwaySystem.US_HIGHWAY}>U.S. Highway</option>
                                <option value={HighwaySystem.STATE}>State</option>
                            </select>
                        </div>
                        {
                            this.state.system === HighwaySystem.STATE &&
                            <div className={styles.sidebarElement}>
                                <span className={styles.signText}>STATE</span>
                                <select className={styles.input} value={this.state.state} onChange={this.onChangeState}>
                                    <option value={undefined}>-</option>
                                    <option value={UsState.MICHIGAN}>Michigan</option>
                                </select>
                            </div>
                        }
                        <div className={styles.sidebarElement}>
                            <span className={styles.signText}>ROUTE NUMBER</span>
                            <input className={styles.input} value={this.state.routeNumber}
                                   onChange={this.onChangeRouteNumber} maxLength={3}/>
                        </div>
                    </div>
                    <span className={styles.rev}>build {this.getRevisionSha()} - {this.getBuildTime()}</span>
                </div>
            </div>
        </div>;
    }

    private getRevisionSha() {
        const uiVersion = document.querySelector<HTMLMetaElement>('meta[name="ui-version"]');
        return uiVersion ? uiVersion.content : '';
    }

    private getBuildTime() {
        const buildTime = document.querySelector<HTMLMetaElement>('meta[name="build-time"]');
        return buildTime ? buildTime.content : '';
    }

    private onChangeSystem(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({system: event.target.value as HighwaySystem});
    }

    private onChangeState(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({state: event.target.value as UsState});
    }

    private onChangeRouteNumber(event: ChangeEvent<HTMLInputElement>) {
        this.setState({routeNumber: event.target.value.substr(0, 3)});
    }
}