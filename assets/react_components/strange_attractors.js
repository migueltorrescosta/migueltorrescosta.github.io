'use strict';

const e = React.createElement;

class StrangeAttractors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractors: [{ id: 0, x: 1000, y: -600 }, { id: 1, x: -1000, y: -600 }, { id: 2, x: 0, y: 1000 }],
      new_attractor: { id: 3, x: 0, y: 0 },
      points: [{ id: 0, x: 0, y: 0 }],
      current_point: { x: 0, y: 0 },
      iterations: 10000,
      pull: 50,
      error_message: ""
    };
  }

  isValidIterations(iterations) {
    let valid = !(isNaN(iterations) || iterations < 1 || iterations > 10000);
    if (!valid) {
      this.setState({
        error_message: "The number of iterations should be a postiive integer under 10000"
      });
    };
    return valid;
  }

  isValidPull(pull) {
    let valid = !(isNaN(pull) || pull <= 0 || pull >= 100);
    if (!valid) {
      this.setState({
        error_message: "The pull should be a percentage strictly between 0 and 100"
      });
    };
    return valid;
  }

  handleIterationsChange(e) {
    let iterations = parseInt(e.target.value);
    if (isNaN(iterations)) {iterations = 1;};
    this.setState({ iterations: iterations });
  }

  handlePullChange(e) {
    let pull = parseFloat(e.target.value);
    if (isNaN(pull)) {pull = 0;};
    this.setState({ pull: pull });
  }

  isValidRun() {
    return (
      this.isValidIterations(this.state.iterations) && this.isValidPull(this.state.pull));

  }

  pickRandomAttractor() {
    let attractors_length = this.state.attractors.length;
    let random_attractor = this.state.attractors[Math.floor(Math.random() * attractors_length)];
    return random_attractor;
  }

  runSimulation() {
    const { iterations, pull, points, current_point } = this.state;
    let latest_current_point = current_point;
    if (this.isValidRun()) {
      for (let i = 0; i < iterations; i++) {
        let random_attractor = this.pickRandomAttractor();
        points.push(latest_current_point);
        latest_current_point = {
          x: (pull * random_attractor.x + (100 - pull) * latest_current_point.x) / 100,
          y: (pull * random_attractor.y + (100 - pull) * latest_current_point.y) / 100
        };
        this.setState({
          points: points,
          current_point: latest_current_point
        });
      }
    }
  }

  erasePoints() {
    this.setState({ points: [] });
  }


  renderSimulationInfo() {
    return (/*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { className: "button", onClick: () => this.erasePoints() }, "Erase Points")
      ), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { className: "button", onClick: () => this.runSimulation() }, "Run Simulation")

      ), /*#__PURE__*/
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("tbody", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right", width: "50%" }, "Iterations"), /*#__PURE__*/
      React.createElement("td", { align: "left" }, /*#__PURE__*/
      React.createElement("input", { form: "run-simulation", size: "2", type: "text", value: this.state.iterations, name: "name", onChange: this.handleIterationsChange.bind(this) })
      )
      ), /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "right", width: "50%" }, "Pull"), /*#__PURE__*/
      React.createElement("td", { align: "left" }, /*#__PURE__*/
      React.createElement("input", { form: "run-simulation", size: "2", type: "text", value: this.state.pull, name: "name", onChange: this.handlePullChange.bind(this) }), "%"
      )
      )
      )
      )
      ));

  }

  renderKeyPoints() {
    return (/*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("table", null, /*#__PURE__*/
      React.createElement("thead", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "center", colspan: "2" }, /*#__PURE__*/React.createElement("b", null, "Attractors"))
      )
      ), /*#__PURE__*/
      React.createElement("tbody", null,
      this.renderAttractorsTableData(),
      this.renderNewAttractorForm()
      )
      )
      ));

  }

  handleAttractorDelete(id) {
    this.setState({ attractors: this.state.attractors.filter((attractor) => attractor.id != id) });
  }

  renderNewAttractorForm() {
    return (/*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("td", { align: "center" }, /*#__PURE__*/
      React.createElement("form", { id: "add-attractor", onSubmit: this.handleAttractorSubmit.bind(this) }), "( ", /*#__PURE__*/
      React.createElement("input", { size: "2", style: { textAlign: "center" }, className: "form-inline", form: "add-attractor", type: "text", value: this.state.new_attractor.x, name: "x", onChange: this.handleNewAttractorXChange.bind(this) }), " ,", /*#__PURE__*/
      React.createElement("input", { size: "2", style: { textAlign: "center" }, className: "form-inline", form: "add-attractor", type: "text", value: this.state.new_attractor.y, name: "y", onChange: this.handleNewAttractorYChange.bind(this) }), " )"
      ), /*#__PURE__*/
      React.createElement("td", null, /*#__PURE__*/
      React.createElement("input", { form: "add-attractor", type: "submit", value: "Add New" })
      )
      ));

  }

  handleNewAttractorXChange(e) {
    this.setState({
      new_attractor: {
        id: this.state.new_attractor.id,
        x: e.target.value,
        y: this.state.new_attractor.y
      }
    });
  }

  handleNewAttractorYChange(e) {
    this.setState({
      new_attractor: {
        id: this.state.new_attractor.id,
        x: this.state.new_attractor.x,
        y: e.target.value
      }
    });
  }

  handleAttractorSubmit(e) {
    e.preventDefault();
    this.setState({
      attractors: this.state.attractors.concat(this.state.new_attractor),
      new_attractor: {
        id: this.state.new_attractor.id + 1,
        x: 0,
        y: 0
      }
    });
  }

  renderAttractorsTableData() {
    return [...this.state.attractors].map((item, index) => {
      const { id, x, y } = item;
      const delete_attractor = /*#__PURE__*/
      React.createElement("td", { className: "delete_button", width: "20px" }, /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("button", { className: "button", onClick: () => this.handleAttractorDelete(id) }, "Delete")
      )
      );

      return (/*#__PURE__*/
        React.createElement("tr", { key: id }, /*#__PURE__*/
        React.createElement("td", { align: "center" }, "( ", x, " , ", y, " )"),
        delete_attractor
        ));

    });
  }

  renderPlot() {
    var attractors = {
      x: this.state.attractors.map((z) => z.x),
      y: this.state.attractors.map((z) => z.y),
      mode: 'markers',
      type: 'scatter',
      name: 'Attractors',
      marker: { color: '#000' }
    };

    var points = {
      x: this.state.points.map((z) => z.x),
      y: this.state.points.map((z) => z.y),
      mode: 'markers',
      type: 'scatter',
      name: 'All points',
      marker: { color: '#5a81b0' }
    };

    var current_point = {
      x: [this.state.current_point.x],
      y: [this.state.current_point.y],
      mode: 'markers',
      type: 'scatter',
      name: 'Latest Point',
      marker: { color: '#f60' }
    };

    var layout = {
      autosize: true,
      xaxis: { 'showgrid': false, 'zeroline': false, 'visible': false },
      yaxis: { 'showgrid': false, 'zeroline': false, 'visible': false },
      hovermode: !1,
      plot_bgcolor: "#fff",
      legend: {
        x: .5,
        y: 1,
        xanchor: "center",
        yanchor: "bottom",
        orientation: "h"
      }
    };

    Plotly.newPlot('plot', [points, attractors, current_point], layout);

  }

  renderErrorMessage() {
    return (/*#__PURE__*/
      React.createElement("small", { style: { color: "red" } }, this.state.error_message));

  }

  render() {
    this.renderPlot();
    return (/*#__PURE__*/
      React.createElement("div", { align: "center" },
      this.state.error_message && this.renderErrorMessage(),
      this.renderSimulationInfo(),
      this.renderKeyPoints()
      ));

  }
}

const domContainer = document.querySelector('#strange_attractors');
ReactDOM.render(e(StrangeAttractors), domContainer);