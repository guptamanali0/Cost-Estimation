import React, { Component } from "react";
import "./index.css";

class HistoricalOrder extends Component {
  constructor() {
    super();
    this.state = {
      length: "",
      breadth: "",
      height: "",
      number: "",
      selectQuantity: "",
      finalResult: "",
      active: 0,
      foundationl: "",
      foundationb: "",
      foundationh: "",
      foundationn: "",
      foundationFinalResult: "",
      selectQuantityOne: "",
      foundationla: "",
      foundationba: "",
      foundationha: "",
      foundationna: "",
      foundationFinalResulta: "",
      selectQuantitya: "",
      plinthyes: "0",

      foundationlab: "",
      foundationbab: "",
      foundationhab: "",
      foundationnab: "",
      foundationFinalResultab: "",
      selectQuantityab: "",

      foundationlabc: "",
      foundationbabc: "",
      foundationhabc: "",
      foundationnabc: "",
      foundationFinalResultabc: "",
      selectQuantityabc: "",

      foundationlabcd: "",
      foundationbabcd: "",
      foundationhabcd: "",
      foundationnabcd: "",
      foundationFinalResultabcd: "",
      selectQuantityabcd: "",

      foundationlabcde: "",
      foundationbabcde: "",
      foundationhabcde: "",
      foundationnabcde: "",
      foundationFinalResultabcde: "",
      selectQuantityabcde: "",

      foundationlabcdef: "",
      foundationbabcdef: "",
      foundationhabcdef: "",
      foundationnabcdef: "",
      foundationFinalResultabcdef: "",
      selectQuantityabcdef: "",

      foundationlabcdefg: "",
      foundationbabcdefg: "",
      foundationhabcdefg: "",
      foundationnabcdefg: "",
      foundationFinalResultabcdefg: "",
      selectQuantityabcdefg: "",

      foundationlabcdefgh: "",
      foundationhabcdefgh: "",
      foundationnabcdefgh: "",
      foundationFinalResultabcdefgh: "",
      selectQuantityabcdefgh: "",

      foundationlabcdefghi: "",
      foundationhabcdefghi: "",
      foundationnabcdefghi: "",
      foundationFinalResultabcdefghi: "",
      selectQuantityabcdefghi: "",

      foundationlabcdefghij: "",
      foundationbabcdefghij: "",

      foundationnabcdefghij: "",
      foundationFinalResultabcdefghij: "",
      selectQuantityabcdefghij: "",
    };

    this.default_state = {
      ...this.state,
    };
  }
  proceedButton = () => {
    let userData =
      this.state.length *
      this.state.breadth *
      this.state.height *
      this.state.number *
      this.state.selectQuantity;

    this.setState({
      finalResult: userData,
    });
  };
  proceedButtonFoundation = () => {
    let userData =
      this.state.foundationl *
      this.state.foundationb *
      this.state.foundationh *
      this.state.foundationn *
      this.state.selectQuantityOne;

    this.setState({
      foundationFinalResult: userData,
    });
  };

  proceedButtonFoundationa = () => {
    let userData =
      this.state.foundationla *
      this.state.foundationba *
      this.state.foundationha *
      this.state.foundationna *
      this.state.selectQuantitya;

    this.setState({
      foundationFinalResulta: userData,
    });
  };

  renderSubDetails = () => {
    let arr = [];
    let aUSer =
      0.03 *
      (this.state.finalResult +
        this.state.foundationFinalResult +
        this.state.foundationFinalResulta +
        this.state.foundationFinalResultab +
        this.state.foundationFinalResultabc +
        this.state.foundationFinalResultabcd +
        this.state.foundationFinalResultabcde +
        this.state.foundationFinalResultabcdef +
        this.state.foundationFinalResultabcdefg +
        this.state.foundationFinalResultabcdefgh +
        this.state.foundationFinalResultabcdefghi +
        this.state.foundationFinalResultabcdefghij);

    let bUser =
      0.02 *
      (this.state.finalResult +
        this.state.foundationFinalResult +
        this.state.foundationFinalResulta +
        this.state.foundationFinalResultab +
        this.state.foundationFinalResultabc +
        this.state.foundationFinalResultabcd +
        this.state.foundationFinalResultabcde +
        this.state.foundationFinalResultabcdef +
        this.state.foundationFinalResultabcdefg +
        this.state.foundationFinalResultabcdefgh +
        this.state.foundationFinalResultabcdefghi +
        this.state.foundationFinalResultabcdefghij);

    let cUser =
      this.state.finalResult +
      this.state.foundationFinalResult +
      this.state.foundationFinalResulta +
      this.state.foundationFinalResultab +
      this.state.foundationFinalResultabc +
      this.state.foundationFinalResultabcd +
      this.state.foundationFinalResultabcde +
      this.state.foundationFinalResultabcdef +
      this.state.foundationFinalResultabcdefg +
      this.state.foundationFinalResultabcdefgh +
      this.state.foundationFinalResultabcdefghi +
      this.state.foundationFinalResultabcdefghij;
    let lastResult = parseInt(aUSer) + parseInt(bUser) + parseInt(cUser);
    let details = [
      {
        name: "Excavation",
        Quantiy:
          this.state.length *
          this.state.breadth *
          this.state.height *
          this.state.number,
        unit: "cum",
        rate: this.state.selectQuantity,
        cost: this.state.finalResult,
      },
      {
        name: "Plain Concrete",
        Quantiy:
          this.state.foundationl *
          this.state.foundationb *
          this.state.foundationh *
          this.state.foundationn,
        unit: "cum",
        rate: this.state.selectQuantityOne,
        cost: this.state.foundationFinalResult,
      },
      {
        name: "Rcc Upto Plinth",
        Quantiy:
          this.state.foundationla *
          this.state.foundationba *
          this.state.foundationha *
          this.state.foundationna,
        unit: "cum",
        rate: this.state.selectQuantitya,
        cost: this.state.foundationFinalResulta,
      },
      {
        name: "Rcc in Walls /Columns/Pillars",
        Quantiy:
          this.state.foundationlab *
          this.state.foundationbab *
          this.state.foundationhab *
          this.state.foundationnab,
        unit: "cum",
        rate: this.state.selectQuantityab,
        cost: this.state.foundationFinalResultab,
      },
      {
        name: "Rcc in Beams",
        Quantiy:
          this.state.foundationlabc *
          this.state.foundationbabc *
          this.state.foundationhabc *
          this.state.foundationnabc,
        unit: "cum",
        rate: this.state.selectQuantityabc,
        cost: this.state.foundationFinalResultabc,
      },
      {
        name: "Rcc in Floor",
        Quantiy:
          this.state.foundationlabcd *
          this.state.foundationbabcd *
          this.state.foundationhabcd *
          this.state.foundationnabcd,
        unit: "cum",
        rate: this.state.selectQuantityabcd,
        cost: this.state.foundationFinalResultabcd,
      },
      {
        name: "Rcc in StairCase",
        Quantiy:
          this.state.foundationlabcde *
          this.state.foundationbabcde *
          this.state.foundationhabcde *
          this.state.foundationnabcde,
        unit: "cum",
        rate: this.state.selectQuantityabcde,
        cost: this.state.foundationFinalResultabcde,
      },
      {
        name: "BrickWork upto Plinth",
        Quantiy:
          this.state.foundationlabcdef *
          this.state.foundationbabcdef *
          this.state.foundationhabcdef *
          this.state.foundationnabcdef,
        unit: "cum",
        rate: this.state.selectQuantityabcdef,
        cost: this.state.foundationFinalResultabcdef,
      },
      {
        name: "BrickWork in SuperStructure",
        Quantiy:
          this.state.foundationlabcdefg *
          this.state.foundationbabcdefg *
          this.state.foundationhabcdefg *
          this.state.foundationnabcdefg,
        unit: "cum",
        rate: this.state.selectQuantityabcdefg,
        cost: this.state.foundationFinalResultabcdefg,
      },

      {
        name: "Plaster On Walls",
        Quantiy:
          this.state.foundationlabcdefgh *
          this.state.foundationhabcdefgh *
          this.state.foundationnabcdefgh,
        unit: "sqm",
        rate: this.state.selectQuantityabcdefgh,
        cost: this.state.foundationFinalResultabcdefgh,
      },

      {
        name: "Plaster on Ceiling",
        Quantiy:
          this.state.foundationlabcdefghi *
          this.state.foundationhabcdefghi *
          this.state.foundationnabcdefghi,
        unit: "sqm",
        rate: this.state.selectQuantityabcdefghi,
        cost: this.state.foundationFinalResultabcdefghi,
      },

      {
        name: "Concrete Flooring",
        Quantiy:
          this.state.foundationlabcdefghij *
          this.state.foundationbabcdefghij *
          this.state.foundationnabcdefghij,
        unit: "sqm",
        rate: this.state.selectQuantityabcdefghij,
        cost: this.state.foundationFinalResultabcdefghij,
      },

      {
        name: "Total Cost",
        unit: "RS",
        cost:
          this.state.finalResult +
          this.state.foundationFinalResult +
          this.state.foundationFinalResulta +
          this.state.foundationFinalResultab +
          this.state.foundationFinalResultabc +
          this.state.foundationFinalResultabcd +
          this.state.foundationFinalResultabcde +
          this.state.foundationFinalResultabcdef +
          this.state.foundationFinalResultabcdefg +
          this.state.foundationFinalResultabcdefgh +
          this.state.foundationFinalResultabcdefghi +
          this.state.foundationFinalResultabcdefghij,
      },
      {
        name: "Contengencies (3 % of Total Cost)",
        // Quantiy:this.state.foundationlabcdefghij*this.state.foundationbabcdefghij*this.state.foundationnabcdefghij,
        unit: "RS",
        // rate:"null",
        cost:
          0.03 *
          (this.state.finalResult +
            this.state.foundationFinalResult +
            this.state.foundationFinalResulta +
            this.state.foundationFinalResultab +
            this.state.foundationFinalResultabc +
            this.state.foundationFinalResultabcd +
            this.state.foundationFinalResultabcde +
            this.state.foundationFinalResultabcdef +
            this.state.foundationFinalResultabcdefg +
            this.state.foundationFinalResultabcdefgh +
            this.state.foundationFinalResultabcdefghi +
            this.state.foundationFinalResultabcdefghij),
      },
      {
        name: "Work Charge Establishment (2 % of Total Cost)",
        unit: "RS",
        cost:
          0.02 *
          (this.state.finalResult +
            this.state.foundationFinalResult +
            this.state.foundationFinalResulta +
            this.state.foundationFinalResultab +
            this.state.foundationFinalResultabc +
            this.state.foundationFinalResultabcd +
            this.state.foundationFinalResultabcde +
            this.state.foundationFinalResultabcdef +
            this.state.foundationFinalResultabcdefg +
            this.state.foundationFinalResultabcdefgh +
            this.state.foundationFinalResultabcdefghi +
            this.state.foundationFinalResultabcdefghij),
      },
      {
        name: "Grand Total",
        unit: "RS",
        cost: lastResult,
      },
    ];
    for (let data of details) {
      arr.push(
        <tr>
          <th>{data.name}</th>
          <th>{data.Quantiy}</th>
          <th>{data.unit}</th>
          <td>{data.rate}</td>
          <td>{data.cost}</td>
        </tr>
      );
    }

    return <>{arr}</>;
  };

  tableButton = () => {
    this.setState({
      active: 1,
    });
  };

  backButton = () => {
    this.setState({
      ...this.state,
      active: 0,
    });
  };

  proceedButtonFoundationab = () => {
    let userData =
      this.state.foundationlab *
      this.state.foundationbab *
      this.state.foundationhab *
      this.state.foundationnab *
      this.state.selectQuantityab;

    this.setState({
      foundationFinalResultab: userData,
    });
  };

  proceedButtonFoundationabc = () => {
    let userData =
      this.state.foundationlabc *
      this.state.foundationbabc *
      this.state.foundationhabc *
      this.state.foundationnabc *
      this.state.selectQuantityabc;

    this.setState({
      foundationFinalResultabc: userData,
    });
  };

  proceedButtonFoundationabcd = () => {
    let userData =
      this.state.foundationlabcd *
      this.state.foundationbabcd *
      this.state.foundationhabcd *
      this.state.foundationnabcd *
      this.state.selectQuantityabcd;

    this.setState({
      foundationFinalResultabcd: userData,
    });
  };

  proceedButtonFoundationabcde = () => {
    let userData =
      this.state.foundationlabcde *
      this.state.foundationbabcde *
      this.state.foundationhabcde *
      this.state.foundationnabcde *
      this.state.selectQuantityabcde;

    this.setState({
      foundationFinalResultabcde: userData,
    });
  };

  proceedButtonFoundationabcdef = () => {
    let userData =
      this.state.foundationlabcdef *
      this.state.foundationbabcdef *
      this.state.foundationhabcdef *
      this.state.foundationnabcdef *
      this.state.selectQuantityabcdef;

    this.setState({
      foundationFinalResultabcdef: userData,
    });
  };

  proceedButtonFoundationabcdefg = () => {
    let userData =
      this.state.foundationlabcdefg *
      this.state.foundationbabcdefg *
      this.state.foundationhabcdefg *
      this.state.foundationnabcdefg *
      this.state.selectQuantityabcdefg;

    this.setState({
      foundationFinalResultabcdefg: userData,
    });
  };

  proceedButtonFoundationabcdefgh = () => {
    let userData =
      this.state.foundationlabcdefgh *
      this.state.foundationhabcdefgh *
      this.state.foundationnabcdefgh *
      this.state.selectQuantityabcdefgh;

    this.setState({
      foundationFinalResultabcdefgh: userData,
    });
  };

  proceedButtonFoundationabcdefghi = () => {
    let userData =
      this.state.foundationlabcdefghi *
      this.state.foundationhabcdefghi *
      this.state.foundationnabcdefghi *
      this.state.selectQuantityabcdefghi;

    this.setState({
      foundationFinalResultabcdefghi: userData,
    });
  };

  proceedButtonFoundationabcdefghij = () => {
    let userData =
      this.state.foundationlabcdefghij *
      this.state.foundationbabcdefghij *
      this.state.foundationnabcdefghij *
      this.state.selectQuantityabcdefghij;

    this.setState({
      foundationFinalResultabcdefghij: userData,
    });
  };

  render() {
    return (
      <>
        {this.state.active == 0 ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "2%",
                  boxShadow: "2px 2px green",
                }}
              >
                <h3>Excavation</h3>

                <label>Length</label>
                <input
                  value={this.state.length}
                  className="form-control"
                  onChange={(e) => this.setState({ length: e.target.value })}
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.breadth}
                  className="form-control"
                  onChange={(e) => this.setState({ breadth: e.target.value })}
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.height}
                  className="form-control"
                  onChange={(e) => this.setState({ height: e.target.value })}
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.number}
                  className="form-control"
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
                <br></br>

                {this.state.length !== "" &&
                this.state.breadth !== "" &&
                this.state.height !== "" &&
                this.state.number !== "" ? (
                  <>
                    Total Quantity
                    <div>
                      {this.state.length *
                        this.state.breadth *
                        this.state.height *
                        this.state.number}
                    </div>
                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantity}
                  onChange={(e) => {
                    this.setState({ selectQuantity: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="129">
                    Earth Work in Excavation by Mechanical Means exceeding 30cm
                    in depth : 129 Rs/cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButton}>Proceed</button>
                <br></br>
                <div>Cost {this.state.finalResult} </div>
              </div>

              <div
                style={{
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>Plain Concrete</h3>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "8%",
                      height: "10%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "20px" }}>
                    Providing and laying in position cement concrete
                    <br></br>
                    of specified grade excluding the cost of centering
                    <br></br>
                    and shuttering - All work upto plinth level
                    <br></br>
                  </div>
                </div>
                <label>Length</label>
                <input
                  value={this.state.foundationl}
                  onChange={(e) =>
                    this.setState({ foundationl: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationb}
                  onChange={(e) =>
                    this.setState({ foundationb: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationh}
                  onChange={(e) =>
                    this.setState({ foundationh: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationn}
                  onChange={(e) =>
                    this.setState({ foundationn: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationl !== "" &&
                this.state.foundationb !== "" &&
                this.state.foundationh !== "" &&
                this.state.foundationn !== "" ? (
                  <>
                    <div>
                      Total Quantity
                      {this.state.foundationl *
                        this.state.foundationb *
                        this.state.foundationh *
                        this.state.foundationn}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityOne}
                  onChange={(e) => {
                    this.setState({ selectQuantityOne: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="6338">
                    M-25 – Grade concrete (20mm Graded stone aggregates) :
                    6338Rs/cum
                  </option>
                  <option value="4933">
                    M-20 – Grade concrete (20mm Graded stone aggregates) :
                    4933Rs/cum
                  </option>
                  <option value="4471">
                    M-15 – Grade concrete (20mm Graded stone aggregates) :
                    4471Rs/cum
                  </option>

                  <option value="3890">
                    M-10 – Grade concrete (20mm Graded stone aggregates) :
                    3890Rs/cum
                  </option>
                  <option value="4403">
                    M-15 – Grade concrete (40mm Graded stone aggregates) :
                    4403Rs/cum
                  </option>

                  <option value="3808">
                    M-10– Grade concrete (40mm Graded stone aggregates) :
                    3808Rs/cum
                  </option>
                  <option value="3474">
                    M-7.5 – Grade concrete (40mm Graded stone aggregates) :
                    3474Rs/cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundation}>Proceed</button>
                <br></br>
                <div>Cost {this.state.foundationFinalResult} </div>
              </div>

              <div
                style={{
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                  marginTop: "3%",
                }}
              >
                <h3>RCC Upto Plinth</h3>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "8%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "20px" }}>
                    Providing and laying in position specified grade of
                    <br></br>
                    reinforced cement concrete (with 20mm nominal size graded
                    stone aggregate)
                    <br></br>
                    shuttering, finishing and reinforcement All work up to
                    <br></br>
                    plinth level:
                  </div>
                </div>
                <label>Length</label>
                <input
                  value={this.state.foundationla}
                  onChange={(e) =>
                    this.setState({ foundationla: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationba}
                  onChange={(e) =>
                    this.setState({ foundationba: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationha}
                  onChange={(e) =>
                    this.setState({ foundationha: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationna}
                  onChange={(e) =>
                    this.setState({ foundationna: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationla !== "" &&
                this.state.foundationba !== "" &&
                this.state.foundationha !== "" &&
                this.state.foundationna !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationla *
                        this.state.foundationba *
                        this.state.foundationha *
                        this.state.foundationna}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantitya}
                  onChange={(e) => {
                    this.setState({ selectQuantitya: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="5796">
                    M-20 Grade Concrete : 5796 RS/cum
                  </option>
                  <option value="5397">M-15 Grade Concrete :5397Rs/cum</option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationa}>Proceed</button>
                <br></br>
                <div>Cost {this.state.foundationFinalResulta} </div>
              </div>

              <div
                style={{
                  // width: "70%",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                  marginTop: "3%",
                }}
              >
                <h3>
                  RCC in Walls/
                  <h3 style={{ margin: "0px " }}>
                    Columns/
                    <h3 style={{ margin: "0px" }}>Pillars</h3>
                  </h3>
                </h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "8%",
                      height: "10%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "20px" }}>
                    Reinforced cement concrete work (with 20 mm nominal size
                    graded stone aggregate)
                    <br></br>
                    in walls (any thickness), including attached pilasters,
                    buttresses
                    <br></br>
                    plinth and string courses, fillets, columns, pillars, posts
                    and struts etc
                    <br></br>
                    above plinth level and upto floor two level excluding
                    <br></br>
                    cost of centering, shuttering, finishing reinforcement:
                  </div>
                </div>

                <label>Length</label>
                <input
                  value={this.state.foundationlab}
                  onChange={(e) =>
                    this.setState({ foundationlab: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbab}
                  onChange={(e) =>
                    this.setState({ foundationbab: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhab}
                  onChange={(e) =>
                    this.setState({ foundationhab: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnab}
                  onChange={(e) =>
                    this.setState({ foundationnab: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlab !== "" &&
                this.state.foundationbab !== "" &&
                this.state.foundationhab !== "" &&
                this.state.foundationnab !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlab *
                        this.state.foundationbab *
                        this.state.foundationhab *
                        this.state.foundationnab}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityab}
                  onChange={(e) => {
                    this.setState({ selectQuantityab: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="5865">
                    M-20 Grade Concrete : 5865 Rs/cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationab}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultab} </div>
              </div>

              <div
                style={{
                  // width: "70%",
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>RCC in Beams</h3>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "10%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    Reinforced cement concrete work
                    <br></br>
                    (with 20 mm nominal size graded stone aggregate)
                    <br></br>
                    in beams, suspended floors, roofs having slope of any
                    <br></br>
                    degree landings, balconies, shelves, chajjas, lintels,
                    bands,
                    <br></br>
                    plain window sills, staircases and spiral staircases above
                    plinth
                    <br></br>
                    level and upto floor two level excluding the cost of
                    centering, shuttering,
                    <br></br>
                    finishing and reinforcement in concrete grade.
                    <br></br>
                    Providing and laying in position specified grade of :
                  </div>
                </div>

                <label>Length</label>
                <input
                  value={this.state.foundationlabc}
                  onChange={(e) =>
                    this.setState({ foundationlabc: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbabc}
                  onChange={(e) =>
                    this.setState({ foundationbabc: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabc}
                  onChange={(e) =>
                    this.setState({ foundationhabc: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabc}
                  onChange={(e) =>
                    this.setState({ foundationnabc: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabc !== "" &&
                this.state.foundationbabc !== "" &&
                this.state.foundationhabc !== "" &&
                this.state.foundationnabc !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabc *
                        this.state.foundationbabc *
                        this.state.foundationhabc *
                        this.state.foundationnabc}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabc}
                  onChange={(e) => {
                    this.setState({ selectQuantityabc: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="6155">
                    M-20 – Grade concrete : 6155Rs/Cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabc}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabc} </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>RCC in Floor</h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "10%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    Reinforced cement concrete work
                    <br></br>
                    (with 20 mm nominal size graded stone aggregate)
                    <br></br>
                    in beams, suspended floors, roofs having slope of any
                    <br></br>
                    degree landings, balconies, shelves, chajjas, lintels,
                    bands,
                    <br></br>
                    plain window sills, staircases and spiral staircases above
                    plinth
                    <br></br>
                    level and upto floor two level excluding the cost of
                    centering, shuttering,
                    <br></br>
                    finishing and reinforcement in concrete grade.
                    <br></br>
                    Providing and laying in position specified grade of :
                  </div>
                </div>

                <label>Length</label>
                <input
                  value={this.state.foundationlabcd}
                  onChange={(e) =>
                    this.setState({ foundationlabcd: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbabcd}
                  onChange={(e) =>
                    this.setState({ foundationbabcd: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabcd}
                  onChange={(e) =>
                    this.setState({ foundationhabcd: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcd}
                  onChange={(e) =>
                    this.setState({ foundationnabcd: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcd !== "" &&
                this.state.foundationbabcd !== "" &&
                this.state.foundationhabcd !== "" &&
                this.state.foundationnabcd !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcd *
                        this.state.foundationbabcd *
                        this.state.foundationhabcd *
                        this.state.foundationnabcd}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcd}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcd: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="6155">
                    M-20 – Grade concrete : 6155Rs/Cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcd}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcd} </div>
              </div>

              <div
                style={{
                  // width: "70%",
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>RCC in StairCases</h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "10%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    Reinforced cement concrete work
                    <br></br>
                    (with 20 mm nominal size graded stone aggregate)
                    <br></br>
                    in beams, suspended floors, roofs having slope of any
                    <br></br>
                    degree landings, balconies, shelves, chajjas, lintels,
                    bands,
                    <br></br>
                    plain window sills, staircases and spiral staircases above
                    plinth
                    <br></br>
                    level and upto floor two level excluding the cost of
                    centering, shuttering,
                    <br></br>
                    finishing and reinforcement in concrete grade.
                    <br></br>
                    Providing and laying in position specified grade of :
                  </div>
                </div>
                <label>Length</label>
                <input
                  value={this.state.foundationlabcde}
                  onChange={(e) =>
                    this.setState({ foundationlabcde: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbabcde}
                  onChange={(e) =>
                    this.setState({ foundationbabcde: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabcde}
                  onChange={(e) =>
                    this.setState({ foundationhabcde: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcde}
                  onChange={(e) =>
                    this.setState({ foundationnabcde: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcde !== "" &&
                this.state.foundationbabcde !== "" &&
                this.state.foundationhabcde !== "" &&
                this.state.foundationnabcde !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcde *
                        this.state.foundationbabcde *
                        this.state.foundationhabcde *
                        this.state.foundationnabcde}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcde}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcde: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="6155">
                    M-20 – Grade concrete : 6155Rs/Cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcde}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcde} </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>BrickWork Upto Plinth</h3>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "10%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    Brick work with well burnt chimney bricks in bulls pattern
                    <br></br>
                    trench kiln manufactured by ghol process,
                    <br></br>
                    crushing strength not less than specified strength
                    <br></br>
                    and water absorption not more than 15% in foundation
                    <br></br>
                    and plinth i/c curing etc.
                  </div>
                </div>

                <label>Length</label>
                <input
                  value={this.state.foundationlabcdef}
                  onChange={(e) =>
                    this.setState({ foundationlabcdef: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbabcdef}
                  onChange={(e) =>
                    this.setState({ foundationbabcdef: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabcdef}
                  onChange={(e) =>
                    this.setState({ foundationhabcdef: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcdef}
                  onChange={(e) =>
                    this.setState({ foundationnabcdef: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcdef !== "" &&
                this.state.foundationbabcdef !== "" &&
                this.state.foundationhabcdef !== "" &&
                this.state.foundationnabcdef !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcdef *
                        this.state.foundationbabcdef *
                        this.state.foundationhabcdef *
                        this.state.foundationnabcdef}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcdef}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcdef: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="5818">
                    Brick work with 40kg/cm2 chimney bricks up to plinth with CM
                    1:4 :5818 Rs/cum
                  </option>
                  <option value="5626">
                    Brick work with 40kg/cm2 chimney bricks up to plinth with CM
                    1:6 :5626 Rs/cum
                  </option>

                  <option value="5252">
                    Brick work with 25kg/cm2 chimney bricks up to plinth with CM
                    1:4 :5252 Rs/cum
                  </option>
                  <option value="5061">
                    Brick work with 25kg/cm2 chimney bricks up to plinth with CM
                    1:6 :5061 Rs/cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcdef}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcdef} </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>BrickWork in SuperStructure</h3>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "blue",
                      marginRight: "10px",
                      borderRadius: "50%",
                      width: "10%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    i
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    Brick work with well burnt chimney bricks in bulls patent
                    <br></br>
                    trench kiln manufactured by ghol process ,crushing strength
                    not less than the specified strength
                    <br></br>
                    and water absorption not more than 15% in superstructure
                    <br></br>
                    above plinth level and up to floor two level i/c curing etc.
                  </div>
                </div>

                <label>Length</label>
                <input
                  value={this.state.foundationlabcdefg}
                  onChange={(e) =>
                    this.setState({ foundationlabcdefg: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbabcdefg}
                  onChange={(e) =>
                    this.setState({ foundationbabcdefg: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabcdefg}
                  onChange={(e) =>
                    this.setState({ foundationhabcdefg: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcdefg}
                  onChange={(e) =>
                    this.setState({ foundationnabcdefg: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcdefg !== "" &&
                this.state.foundationbabcdefg !== "" &&
                this.state.foundationhabcdefg !== "" &&
                this.state.foundationnabcdefg !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcdefg *
                        this.state.foundationbabcdefg *
                        this.state.foundationhabcdefg *
                        this.state.foundationnabcdefg}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcdefg}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcdefg: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="6012">
                    Brick work with 40kg/cm2 chimney bricks up to plinth with CM
                    1:4 :6012 Rs/cum
                  </option>
                  <option value="5821">
                    Brick work with 40kg/cm2 chimney bricks up to plinth with CM
                    1:6 :5821 Rs/cum
                  </option>

                  <option value="5446">
                    Brick work with 25kg/cm2 chimney bricks up to plinth with CM
                    1:4 :5446 Rs/cum
                  </option>
                  <option value="5255">
                    Brick work with 25kg/cm2 chimney bricks up to plinth with CM
                    1:6 :5255 Rs/cum
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcdefg}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcdefg} </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>Plaster On Walls</h3>

                <label>Length</label>
                <input
                  value={this.state.foundationlabcdefgh}
                  onChange={(e) =>
                    this.setState({ foundationlabcdefgh: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabcdefgh}
                  onChange={(e) =>
                    this.setState({ foundationhabcdefgh: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcdefgh}
                  onChange={(e) =>
                    this.setState({ foundationnabcdefgh: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcdefgh !== "" &&
                this.state.foundationhabcdefgh !== "" &&
                this.state.foundationnabcdefgh !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcdefgh *
                        this.state.foundationhabcdefgh *
                        this.state.foundationnabcdefgh}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcdefgh}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcdefgh: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>
                  <option value="149">
                    12 mm cement plaster CM 1:4 :149 Rs/Sqm
                  </option>

                  <option value="138">
                    12 mm cement plaster CM 1:6 :138 Rs/Sqm
                  </option>
                  <option value="162">
                    15 mm cement plaster CM 1:4 :162 Rs/Sqm
                  </option>
                  <option value="148">
                    15 mm cement plaster CM 1:6 :148 Rs/Sqm
                  </option>
                  <option value="215">
                    20 mm cement plaster CM 1:4 :215 Rs/Sqm
                  </option>
                  <option value="197">
                    20 mm cement plaster CM 1:6 :197 Rs/Sqm
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcdefgh}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcdefgh} </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>Plaster on Ceiling</h3>

                <label>Length</label>
                <input
                  value={this.state.foundationlabcdefghi}
                  onChange={(e) =>
                    this.setState({ foundationlabcdefghi: e.target.value })
                  }
                />
                <br></br>
                <label>Height</label>
                <input
                  value={this.state.foundationhabcdefghi}
                  onChange={(e) =>
                    this.setState({ foundationhabcdefghi: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcdefghi}
                  onChange={(e) =>
                    this.setState({ foundationnabcdefghi: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcdefghi !== "" &&
                this.state.foundationhabcdefghi !== "" &&
                this.state.foundationnabcdefghi !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcdefghi *
                        this.state.foundationhabcdefghi *
                        this.state.foundationnabcdefghi}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcdefghi}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcdefghi: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>

                  <option value="96">
                    6 mm cement plaster CM 1:3 :96 Rs/Sqm
                  </option>
                  <option value="149">
                    12 mm cement plaster CM 1:4 :149 Rs/Sqm
                  </option>

                  <option value="138">
                    12 mm cement plaster CM 1:6 :138 Rs/Sqm
                  </option>
                  <option value="162">
                    15 mm cement plaster CM 1:4 :162 Rs/Sqm
                  </option>
                  <option value="148">
                    15 mm cement plaster CM 1:6 :148 Rs/Sqm
                  </option>
                  <option value="215">
                    20 mm cement plaster CM 1:4 :215 Rs/Sqm
                  </option>
                  <option value="197">
                    20 mm cement plaster CM 1:6 :197 Rs/Sqm
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcdefghi}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcdefghi} </div>
              </div>

              <div
                style={{
                  marginTop: "40px",
                  backgroundColor: "red",
                  borderRadius: "2%",
                  boxShadow: "2px 2px white",
                  marginLeft: "20Px",
                }}
              >
                <h3>Concrete Flooring</h3>

                <label>Length</label>
                <input
                  value={this.state.foundationlabcdefghij}
                  onChange={(e) =>
                    this.setState({ foundationlabcdefghij: e.target.value })
                  }
                />
                <br></br>
                <label>Breadth</label>
                <input
                  value={this.state.foundationbabcdefghij}
                  onChange={(e) =>
                    this.setState({ foundationbabcdefghij: e.target.value })
                  }
                />
                <br></br>
                <label>Number</label>
                <input
                  value={this.state.foundationnabcdefghij}
                  onChange={(e) =>
                    this.setState({ foundationnabcdefghij: e.target.value })
                  }
                />
                <br></br>
                {this.state.foundationlabcdefghij !== "" &&
                this.state.foundationbabcdefghij !== "" &&
                this.state.foundationnabcdefghij !== "" ? (
                  <>
                    <div>
                      Total Quantity{" "}
                      {this.state.foundationlabcdefghij *
                        this.state.foundationbabcdefghij *
                        this.state.foundationnabcdefghij}
                    </div>

                    <br></br>
                  </>
                ) : null}

                <label>Select Rate</label>
                <select
                  value={this.state.selectQuantityabcdefghij}
                  onChange={(e) => {
                    this.setState({ selectQuantityabcdefghij: e.target.value });
                  }}
                >
                  <option value="">Select Rate</option>

                  <option value="270">
                    40 mm cement Concrete Flooring 1:2:4(Area of Pannel Not
                    Exceed 2.0Sqm) :270 Rs/Sqm
                  </option>
                  <option value="399">
                    52 mm thick cement Concrete Flooring with hardener topping
                    52mm thick,under layer 40mm thick cement concrete 1:2:4 and
                    top layer 12 mm thick cement hardener consisting of mix 1:2
                    :399 Rs/Sqm
                  </option>
                  <option value="431">
                    cement Concrete Flooring with hardener topping 62mm thick
                    with under layer 50mm thick cement concrete 1:2:4 and top
                    layer 12 mm thick cement hardener consisting of mix 1:2 :431
                    Rs/Sqm
                  </option>
                </select>
                <br></br>
                <button onClick={this.proceedButtonFoundationabcdefghij}>
                  Proceed
                </button>
                <br></br>
                <div>Cost {this.state.foundationFinalResultabcdefghij} </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-danger btn-lg"
                  onClick={() => this.setState({ ...this.default_state })}
                >
                  Reset
                </button>
                <button onClick={this.tableButton}>Abstract</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <table
                style={{
                  margin: "20px auto",
                  minWidth: "500px",
                  width: "max-content",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ paddingRight: "30px" }}>Element</th>
                    <th style={{ paddingRight: "30px" }}>TotalQuantity</th>
                    <th style={{ paddingRight: "30px" }}>Unit Of Quantity</th>
                    <th style={{ paddingRight: "30px" }}>Rate</th>
                    <th style={{ paddingRight: "30px" }}>Cost</th>
                  </tr>
                </thead>
                <tbody>{this.renderSubDetails()}</tbody>
              </table>
            </div>
            <button onClick={this.backButton}>Back</button>
          </>
        )}
      </>
    );
  }
}
export default HistoricalOrder;
