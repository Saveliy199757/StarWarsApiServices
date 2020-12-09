import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";





export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;


    this.setState({
      loading: true
    });



   getData(itemId)
        .then((item) => {
          this.setState({
            item: item,
            loading: false,
            image: getImageUrl(item),
          })
        }).catch( err => {
          console.log( 'bad req method  ' + err)
    })
  }


  render() {

    if (!this.state.item) {
      return <Spinner/>
    }

    const { item, loading, image } = this.state;

    if ( loading ) {
      return <Spinner/>
    }


    return (
        <div className="person-details card">
          <PersonView
              item={item}
              image={image}
              props={
                React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item })
          })}  />

        </div>



    );



  }
}

const PersonView = ({item, image, props}) => {

  const { name} = item;

  return (
    <React.Fragment>
        <img className="person-image"
             src={image}  alt="img"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {props}
          </ul>
        </div>

  </React.Fragment>

  );

};
