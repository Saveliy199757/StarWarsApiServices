import React, { Component } from 'react';

import './planet-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PlanetDetails extends Component {

    swapiService = new SwapiService();

    state = {
        planet: null,
        loading: false
    };

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.planetId !== prevProps.planetId) {
            this.updatePlanet();
        }
    }

    updatePlanet() {
        const { planetId } = this.props;

        this.setState({
            loading: true
        });

        this.swapiService
            .getPlanet(planetId)
            .then((planet) => {
                this.setState({
                    planet: planet,
                    loading: false
                })
            })
    }

    render() {


        if (!this.state.planet) {
            return <Spinner/>
        }

        const { planet, loading } = this.state;

        if ( loading ) {
            return <Spinner/>
        }


        return (
            <div className="person-details card">
                <PlanetView planet={planet} />
            </div>

        );



    }
}

const PlanetView = ({planet}) => {

    const { id, name, population,
        rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt="img"/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">rotationPeriod</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> diameter</span>
                        <span>{ diameter}</span>
                    </li>
                </ul>
            </div>

        </React.Fragment>

    );

};
