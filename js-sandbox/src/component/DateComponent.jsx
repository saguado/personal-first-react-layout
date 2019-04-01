import React, {Component} from 'react';

class DateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render(){

        const dateSection = this.state.date.toISOString();

        return(
            <div>

                <h5><i>Fecha actual: {dateSection}</i></h5>
            </div>
        );
    }
}

export default DateComponent;