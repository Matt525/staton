import React from 'react'; 
import './main.css'; 



export default class Toggle extends React.Component { 
    constructor(props){
        super(props);
        this.state = { 
            on: false,
        }
        this.toggle = this.toggle.bind(this); 
    }

    
    
    
    toggle = () =>{
        // opposite of the current state of 'show'
        this.setState({on: !this.state.on});
    }




    
    render() { 
        


        // Setting props to the variable of render;
        const {render} = this.props; 

        return(
            <div>
                    {/* Sending 'on' and 'toggle' to the render method as props. */}
                    {render({on: this.state.on, toggle: this.toggle})}

            </div>
        )
    }
}


// Assign props to a variable 
// Send the props of render to the Landing.js component
// pass in props assigned to a variable as arguments to 'render' to pass to Landing component.
//  