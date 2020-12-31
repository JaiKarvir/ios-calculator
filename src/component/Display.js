import React from 'react';
import './Display.css'

class Display extends React.Component{
   /* constructor(props){
        super(props);
    }*/

    render(){
        return (
        <div className="component-display">
            {this.props.value}
        </div>
        );
    }
}

export default Display;