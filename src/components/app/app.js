import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';


import SwapiService from "../../services/swapi-service";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {



    state = {
        showRandomPlanet: true
    };


    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;




        return (

                <div className="stardb-app">
                    <Header />

                    <PersonDetails itemId={11} />

                    <PlanetDetails itemId={5} />

                 <StarshipDetails itemId={9} />

                    <PersonList />

                    <StarshipList />

                    <PlanetList />

                </div>

        );
    }
}