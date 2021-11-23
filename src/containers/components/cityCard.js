import React from 'react'
import './style.css';
import {Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { unSetCityObject } from '../../redux/actions/textAction';
import { useDispatch } from 'react-redux';





function CityCard(props) {
    const {name, temp, pressure, humidity} = props.cityDetails;
    const dispatch = useDispatch();

    const removeCity = () => {
        dispatch(unSetCityObject(props.cityDetails));
    }

    return (
        <div >
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title>
                        <h1 className="title">
                            {name}
                        </h1>
                    </Card.Title>
                    <br/>
                    <Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Temperature : <strong>{temp}</strong></ListGroupItem>
                            <ListGroupItem> Pressure : <strong> {pressure}</strong></ListGroupItem>
                            <ListGroupItem> Humidity : <strong> {humidity}</strong></ListGroupItem>
                            <ListGroupItem> <Button onClick={removeCity}>delete</Button></ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>    
            </Card>
        </div>
    )
}

export default CityCard
