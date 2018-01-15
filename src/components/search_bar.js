import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { 
            term: '',
            weather_measurement: 'C',
            fahrenheit: {
                color: "#ddd",
                border: '2px solid #bbb'
            },
            celsius: {
                color: 'rgb(97, 147, 212)',
                border: '2px solid rgb(97, 147, 212)'
            }
        };
    }

    buttonClick(button){
        if(button === 'F'){
            this.setState({
                weather_measurement: 'F',
                fahrenheit: {
                    color: 'rgb(97, 147, 212)',
                    border: '2px solid rgb(97, 147, 212)'
                },
                celsius: {
                    color: '#ddd',
                    border: '2px solid #bbb'
                }
            })
        }else if(button === 'C'){
            this.setState({
                weather_measurement: 'C',
                fahrenheit: {
                    color: "#ddd",
                    border: '2px solid #bbb'
                },
                celsius: {
                    color: 'rgb(97, 147, 212)',
                    border: '2px solid rgb(97, 147, 212)'
                }
            })
        }
        this.props.onMeasurementChange(button);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3"></div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div className="input-group search-container">
                        <input 
                            value={this.state.term}
                            className="form-control"
                            onChange={event => this.onInputChange(event.target.value)}
                            placeholder="Enter city..." 
                        />                        
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3">
                    <div className="tempButton">
                        <div className="fahrenheit" 
                        onClick={() => this.buttonClick('F')}
                        style={{background: this.state.fahrenheit.color, borderBottom: this.state.fahrenheit.border}}
                        >&deg;F</div>
                        <div className="celsius" onClick={() => this.buttonClick('C')}
                        style={{background: this.state.celsius.color, borderBottom: this.state.celsius.border}}
                        >&deg;C</div>                
                    </div>
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term, '', '');
        
    }

}

export default SearchBar;