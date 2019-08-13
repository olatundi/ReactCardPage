import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {

    render() {
        return (
            <div className="card" id="mainCard">
                <div className="card-body">
                    <div className="card" id="bodyCard" >

                        <div className="card-body">
                            <div id="titleCon">
                                <h5 className="card-title">Bloodfire Colossus <img id="manaTitle" className="card-img-top" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=small&name=R&type=symbol" alt="Card image cap" />
                                    <img id="manaTitle" className="card-img-top" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=small&name=R&type=symbol" alt="Card image cap" />
                                    <img id="manaTitle" className="card-img-top pull-right" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=6&type=symbol" alt="Card image cap" /> </h5>
                            </div>
                            <img className="card-img-top" id="monster" src="https://assets.echomtg.com/magic/cards/cropped/88171.hq.jpg" />
                            <h6 className="card-title">Creature - Giant
                    <img id="manaEdi" className="card-img-top" src="https://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=DDI&size=small&rarity=R" alt="Card image cap" /></h6>


                            <p className="card-text" >
                                <img id="manaBody" className="card-img-top" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=small&name=R&type=symbol" alt="Card image cap" />
                                , Sacrifice Bloodfire Colossus: It deals 6 damage to each creature and each player.</p>

                            <p className="card-text"id="feature">It took all its strength to contain the fire within.</p>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-">
                                    <h7>Greg Staples</h7>
                                 </div>
                                <div className="col-sm">
                                    </div>
                                <div className="col-sm">
                                    <p>6/6</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}