import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  // initializing the state for the component
  constructor(props) {
    super(props);
    this.state = {term: ''};

    // bind the function to this (which is search bar), and replace on change, with the new instance of the function
    // necessary if the callback function references 'this'
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    // we need to go fetch the weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});


  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// getting this from the reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

// null is here because whenever we are passing in a function, it always goes in as the second argument
// no state necessary
