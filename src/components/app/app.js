import React, {Component} from 'react';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boudary";
import {SwapiServiceProvider} from '../swapi-service-contetxt';
import {PeoplePage, StarshipsPage, PlanetsPage, SecretPage, LoginPage} from "../pages";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {
    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false,
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
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
        const {isLoggedIn} = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet updateInterval={4000}/>

                            <Route path="/"
                                   render={() => <h2>Welcome to StarDb</h2>}
                                   exact/>
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets/" component={PlanetsPage}/>
                            <Route path="/starships/" component={StarshipsPage} exact/>
                            <Route path="/starships/:id"
                                   render={({match}) => {
                                       const {id} = match.params;
                                       return <StarshipDetails itemId={id}/>
                                   }}/>
                            <Route path="/login" render={() => (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)}/>
                            <Route path="/secret" render={() => (<SecretPage isLoggedIn={isLoggedIn}/>)}/>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    };
};