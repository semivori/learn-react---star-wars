import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details/item-details';

import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boudary";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 5,
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
                <div className="stardb-app">
                    <Header />
                    {randomPlanet}

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/>
                </div>
            </ErrorBoundary>
        )
    };
};