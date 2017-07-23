import React, { Component}  from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <tr>
          <th> City </th>
          <th> Temperature</th>
          <th> Pressure</th>
          <th> Humidity</th>
        </tr>
        <tbody>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // same as {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
