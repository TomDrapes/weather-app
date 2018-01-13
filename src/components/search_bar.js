import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
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
                        <div className="fahrenheit">&deg;F</div>
                        <div className="celsius">&deg;C</div>                
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