import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details/item-details';

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boudary";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import {SwapiServiceProvider} from '../swapi-service-contetxt';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 5,
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            console.log(Service.name)
            return {
                swapiService: new Service(),
            }
        })
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            }
        });
    };

    render() {
        const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
                        {randomPlanet}

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={5} />
                        <StarshipDetails itemId={9} />

                        <PersonList/>
                        <StarshipList/>
                        <PlanetList/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    };
};