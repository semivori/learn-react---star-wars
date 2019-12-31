import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boudary";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 4,
        hasError: false,
    };

    swapiService = new SwapiService();

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {({name}) => (<span>{name}</span>)}
            </ItemList>
        );
        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )

    }
}