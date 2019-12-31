import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from "../row";

import './app.css';
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";

export default class App extends Component {
    swapiService = new SwapiService();

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
        const {getPerson, getPersonImage, getStarship, getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={2}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );
        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        );

        return (
            <div>
                <Header />
                {randomPlanet}

                <button className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <Row left={personDetails} right={starshipDetails}/>

            </div>
        )
    };
};