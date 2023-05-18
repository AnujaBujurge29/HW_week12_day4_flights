const React = require("react");

const myStyle = {
  // color: "#ffffff",
  backgroundColor: "darkgray",
  color: "black",
  textAlign: "center",
  height: "80vh",
  padding: "0",
  margin: "0",
  border: '1px outset black'
};
class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div style={myStyle}>
        <h1>Flights Details</h1>
        <ol>
          {flights.map((flight, i) => {
            return (
              <li key={i} style={{textAlign:"left"}}>
                <a href={`/flights/${flight.id}`}>{flight.airline}</a>{" "}airlines<br/>Flight Number:{' '}
                {flight.flightNo}
                <br />
                {/* {flight.departs} */}
                <br />
              </li>
            );
          })}
        </ol>
        <nav>
          <a href="/flights/new">Create a New Flight:</a>
        </nav>
        <br />
      </div>
    );
  }
}
module.exports = Index;
