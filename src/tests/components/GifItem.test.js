import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('test en <GifItem/>', () => {
    const title = 'Darth Wader';
    const url = 'https://star-wars.com/darthwader.jpg';
    
    test('debe hacer match con el snapshot', () => { 
    const { container } = render( <GifItem title={ title } url={ url }/>);
    expect( container ).toMatchSnapshot();
});

});
