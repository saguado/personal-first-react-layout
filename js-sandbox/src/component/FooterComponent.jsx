import React, {Component} from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {count: 0, // count prop
        date: new Date()}; // date prop
    }

    click() {

        this.setState({count: this.state.count + 1}); // incrementa el estado de la propiedad en +1

    }

    reset() {

        this.setState({count:this.state.count = 0}); // establece la propiedad con el valor 0

    }

    render() {
        const dateSection = this.state.date.toISOString();
        return(
            <div className = 'text-center'>
                <h3><h5><i>Fecha actual: {dateSection}</i></h5></h3>
                <br/>
                <span>
                    <button onClick={this.click.bind(this)}>Pulsame!</button>
                    {' '}
                    <span> Clicks: {this.state.count}</span>
                    {' '}
                    <button onClick={this.reset.bind(this)}>Reset!</button>
                </span>

            </div>
        );
    }
}

export default FooterComponent;