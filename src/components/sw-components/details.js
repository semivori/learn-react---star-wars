import React from 'react';

import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";

const swapiService = new SwapiService();
const {
    getPerson,
    getStarship,
    getPlanet,
    getPersonImage,
    getStarshipImage,
    getPlanetImage,
} = swapiService;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field='population' label='Population'/>
            <Record field='rotationPeriod' label='Rotation Period'/>
            <Record field='diameter' label='Diameter'/>
        </ItemDetails>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field='model' label='Model'/>
            <Record field='length' label='Length'/>
            <Record field='costInCredits' label='Cost'/>
        </ItemDetails>
    )};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field='model' label='Model'/>
            <Record field='length' label='Length'/>
            <Record field='costInCredits' label='Cost'/>
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}