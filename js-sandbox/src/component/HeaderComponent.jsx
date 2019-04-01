import React, {Component} from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props);
       this.state = {count: 0};
    }

    click() {

        this.setState({count: this.state.count + 1});

    }

    reset() {

        this.setState({count:this.state.count = 0});

    }


    render() {

        return(
            <div className = 'text-center'>
                <h1>Bienvenido al desarrollo con React</h1>

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

export default HeaderComponent;