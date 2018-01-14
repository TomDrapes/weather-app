import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { 
            term: '',
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
        if(button === 'f'){
            this.setState({
                fahrenheit: {
                    color: 'rgb(97, 147, 212)',
                    border: '2px solid rgb(97, 147, 212)'
                },
                celsius: {
                    color: '#ddd',
                    border: '2px solid #bbb'
                }
            })
        }else if(button === 'c'){
            this.setState({
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
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="input-group search-container">
                        <input 
                            value={this.state.term}
                            className="form-control"
                            onChange={event => this.onInputChange(event.target.value)}
                            placeholder="Enter city..." 
                        />                        
                    </div>
                    
                </div>
                <div className="col-lg-4">
                    <div className="tempButton">
                        <div className="fahrenheit" 
                        onClick={() => this.buttonClick('f')}
                        style={{background: this.state.fahrenheit.color, borderBottom: this.state.fahrenheit.border}}
                        >&deg;F</div>
                        <div className="celsius" onClick={() => this.buttonClick('c')}
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