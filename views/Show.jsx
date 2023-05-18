const React = require("react");

class Show extends React.Component {
  render() {
    // const flights = this.props;
    return (
      <div>
        {/* <h1> Show Flight </h1> */}
        <br />
        <h2> Flight Information</h2>
        <br />
        <p><strong>Airline: </strong>{this.props.flights.airline} Airline</p>
        <p><strong>Flight number: </strong>{this.props.flights.flightNo} </p>
        <p><strong>Departure From: </strong>{this.props.flights.airport} Airport</p>
        
        {/* <p><strong>{this.props.flights.airline} </strong>Airline with flight number <strong>{this.props.flights.flightNo} </strong>will be depart from <strong>{this.props.flights.airport}</strong> airport</p> */}
        <a href= '/flights'>Go back</a>
      </div>
    );
  }
}

module.exports = Show;
