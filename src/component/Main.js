import React from 'react'
import Jumbotron from './Jumbotron';
import Card from './Card';

function Main() {
    return (
        <div className="container">
            <div className="row">
                <Jumbotron />
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Main
