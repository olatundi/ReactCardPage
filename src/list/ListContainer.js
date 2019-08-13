import React, { Component } from 'react';
import { cardData } from '../components/cardData';
import Card1 from '../components/Card1';

export class ListContainer extends Component {

    render() {
        return(
            <div>
                {this.generateListItems()}
            </div>
        )
    }

    generateListItems() {

        const listItems = cardData.map((item) => 
            <Card1 item={item} />)

        return listItems;

    }

}
