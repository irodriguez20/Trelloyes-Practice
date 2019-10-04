import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';


describe('<Card />', () => {
    it('renders without crashing', () => {
        //Render the component, as JSON
        const cardSnapshot = renderer.create(<Card />).toJSON();
        //Check whether it matches the previous snapshot
        //Stored in _snapshots_/Card.test.js.snap
        expect(cardSnapshot).toMatchSnapshot();
    });
});