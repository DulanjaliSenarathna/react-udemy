import { render, screen} from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting Component',()=>{
    test('renders Hello world as a text', ()=>{
        // Arrange
        render(<Greeting/>)
    
        //Act
        //nothing..
    
        // Assert
       const helloWorldElement = screen.getByText('Hello World', {exact:false});
       expect(helloWorldElement).toBeInTheDocument();
    
    });
})

