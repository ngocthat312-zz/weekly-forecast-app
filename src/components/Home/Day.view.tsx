import React from 'react';
import {Card, Col, ListGroup} from 'react-bootstrap';
import {DayProps} from './Day.types';
import moment from 'moment';

const Day: React.FC<DayProps> = React.memo((props: DayProps) => {
    const {weather} = props;
    const day = moment(weather.applicable_date).format('dddd');
    return (
        <Col className="day-wrapper">
            <Card className="weather-day">
                <Card.Header>{day}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Min: {Math.round(weather.min_temp)}</ListGroup.Item>
                    <ListGroup.Item>Max: {Math.round(weather.max_temp)}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    )
});

export default Day;
