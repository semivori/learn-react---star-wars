import React, {Component} from 'react';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boudary";
import {SwapiServiceProvider} from '../swapi-service-contetxt';
import PeoplePage from "../pages/people-page";

export default class App extends Component {
    state = {
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapiService: new Service(),
            }
        })
    };

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet updateInterval={4000}/>
                        <PeoplePage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    };
};