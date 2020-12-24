import React from 'react';

class Info extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <input type='text' placeholder={this.props.info} />
        )
    }
}
export default Info;