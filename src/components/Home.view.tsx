import React, {useEffect} from 'react';
import {Card, Container, Row, Spinner} from 'react-bootstrap';
import {HomePropsType} from './Home.types';
import SearchContainer from './Home/Search.container';
import Day from './Home/Day.view';
import {useDispatch} from 'react-redux';
import {setIsLoading} from './Home/Search.actions';

const HomeView: React.FC<HomePropsType> = React.memo((props: HomePropsType) => {
    const {cityLocationDay, isLoading} = props;
    const dispatch = useDispatch();
    useEffect(() => {
        if (cityLocationDay && cityLocationDay.length > 0) {
            dispatch(setIsLoading(false));
        }
    }, [cityLocationDay])
    const buildWeekDay = () => {
        return cityLocationDay && cityLocationDay.length > 0 ? cityLocationDay.map(day =>
                <Day weather={day}/>
            ) :
            <Card.Subtitle className="text-muted">Please choose a city</Card.Subtitle>;
    }

    return (
        <Card>
            <Card.Header>
                <Row>
                    <SearchContainer/>
                    {isLoading && <Spinner animation="border" variant="primary"/>}
                </Row>
            </Card.Header>
            <Card.Body>
                <Container fluid className="forecast-wrapper">
                    <Row>
                        {buildWeekDay()}
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
})
export default HomeView;
