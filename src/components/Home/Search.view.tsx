import React, {useState} from 'react';
import {Col, InputGroup} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import {IBaseLayoutProps} from './Search.types';
import {CityType} from '../Home.types';

const SearchView: React.FC<IBaseLayoutProps> = React.memo((props: IBaseLayoutProps) => {
    const {cityList, onSearch, onSelectCity, setIsLoading} = props;
    const [singleSelections, setSingleSelections] = useState([]);
    const onSearchCity = (citySearchText: string) => {
        onSearch(citySearchText);
        setIsLoading(true);
    }
    const onSelect = (selectedCityTitle: any) => {
        setSingleSelections(selectedCityTitle);
        const selectedCity = cityList.find(city => city.title === selectedCityTitle[0]);
        selectedCity && onSelectCity(selectedCity.woeid);
        setIsLoading(true);
    }
    const options = cityList.map((city: CityType) => city.title) as any;
    return (
        <Col lg={4}>
            <InputGroup size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                        <i className="bi bi-search"/>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Typeahead
                    id="basic-typeahead-single"
                    onChange={onSelect}
                    onInputChange={onSearchCity}
                    options={options}
                    placeholder="Choose a city..."
                    selected={singleSelections}
                />
            </InputGroup>
        </Col>
    )
})
export default SearchView;
