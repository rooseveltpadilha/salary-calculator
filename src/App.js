import React, { Component } from "react";

import { calculateSalaryFrom } from "./helpers/salary";
import ViewSalary from "./components/viewsalary/ViewSalary";
import Bar from "./components/bar/Bar";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 1100,
      salary: {
        baseINSS: null,
        discountINSS: null,
        baseIRPF: null,
        discountIRPF: null,
        netSalary: null,
        percentDiscountINSS: null,
        percentDiscountIRPF: null,
        percentNetSalary: null,
      },
    };
  }

  componentDidMount() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentDiscountINSS,
      percentDiscountIRPF,
      percentNetSalary,
    } = calculateSalaryFrom(this.state.value);

    this.setState({
      salary: {
        baseINSS,
        discountINSS,
        baseIRPF,
        discountIRPF,
        netSalary,
        percentDiscountINSS,
        percentDiscountIRPF,
        percentNetSalary,
      },
    });
  }

  componentDidUpdate(prev, curr) {
    const { value } = this.state;

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentDiscountINSS,
      percentDiscountIRPF,
      percentNetSalary,
    } = calculateSalaryFrom(this.state.value);

    if (value !== curr.value) {
      this.setState({
        salary: {
          baseINSS,
          discountINSS,
          baseIRPF,
          discountIRPF,
          netSalary,
          percentDiscountINSS,
          percentDiscountIRPF,
          percentNetSalary,
        },
      });
    }
  }

  handleOnChange = (event) => {
    const newValue = event.target.value;
    if (newValue >= 0 && newValue < 100000000000) {
      this.setState({ value: newValue });
    }
  };

  render() {
    const { salary } = this.state;
    return (
      <div
        style={{
          margin: "0px auto",
          maxWidth: "700px",
          padding: "50px 50px",
          backgroundColor: "#000000",
          color: "#ffffff",
          opacity: "0.97",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Calculadora Salarial</h2>

        <span
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <p
            style={{
              marginRight: "12px",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            digite seu salário bruto:
          </p>
          <p style={{ marginRight: "24px", fontSize: "40px" }}>R$</p>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleOnChange}
            step="100"
            style={{ color: "#ffffff", fontSize: "30px" }}
          />
        </span>
        <ViewSalary salary={salary} value={this.state.value} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1000px",
            padding: "60px 50px",
          }}
        >
          <Bar
            valueAll={this.state.value}
            value={this.state.salary.percentDiscountINSS}
            color="#de5617"
          />
          <Bar
            valueAll={this.state.value}
            value={this.state.salary.percentDiscountIRPF}
            color="#d92027"
          />
          <Bar
            valueAll={this.state.value}
            value={this.state.salary.percentNetSalary}
            color="#0da039"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 10px",
          }}
        >
          <a target="new" href="https://github.com/rooseveltpadilha">
            <img
              src="https://i.ibb.co/yf0jw8J/createdby.png"
              alt=""
              style={{ display: "box", borderRadius: "25%" }}
              width="184"
              height="184"
            />
          </a>
        </div>
      </div>
    );
  }
}
