const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h2>New Flight Booking:</h2>
        <form action="/flights" method="POST">
          <lable>Enter Airline:</lable>
          <br />
          <select name="airline">
          <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select>
          {/* <input
            type="text"
            name="airline"
            placeholder="American,Southwest,or United"
            required
          />{" "} */}
          <br />
          <br />
          <label>Airport:</label>
          <br />
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          <label> Enter Flight No. :</label>
          <br />
          <input type="number" name="flightNo" min="10" max="9999" required />
          <br />
          <br />
          <label> Enter Departure Date and Time:</label>
          <br />
          <input
            type="datetime-local"
            name="departs"
            defaultValue={this.props.defaultDate}
          />
          <br />
          <br />
          <input type="submit" value="Book Flight"/>
        </form>
        
      </div>
    );
  }
}
module.exports = New;
