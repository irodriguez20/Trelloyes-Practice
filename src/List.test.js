import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import App from './App';


describe('<List />', () => {
    
    it('renders without crashing', () => {
        //Render the component, as JSON
        const div = document.createElement('div');

        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});