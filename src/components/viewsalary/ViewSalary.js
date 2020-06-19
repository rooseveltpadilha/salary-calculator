import React, { Component } from "react";

export default class ViewSalary extends Component {
  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentDiscountINSS,
      percentDiscountIRPF,
      percentNetSalary,
    } = this.props.salary;

    if (this.props.value > 0) {
      return (
        <div style={styles.container}>
          <div
            style={{
              ...styles.box,
              backgroundColor: "#0b0a0a",
            }}
          >
            <p>Salário Bruto:</p>
            <p style={{ fontSize: "28px" }}>
              R${" "}
              {baseINSS === null
                ? ""
                : Number(baseINSS).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
            </p>
          </div>

          <div
            style={{
              ...styles.box,
              backgroundColor: "#de5617",
            }}
          >
            <p>Desconto INSS:</p>
            <p style={{ fontSize: "32px" }}>
              R${" "}
              {discountINSS === null
                ? ""
                : Number(discountINSS).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  }) + " "}
              ({percentDiscountINSS}%)
            </p>
          </div>

          <div
            style={{
              ...styles.box,
              backgroundColor: "#0b0a0a",
            }}
          >
            <p>Base IRPF:</p>
            <p style={{ fontSize: "27px" }}>
              R${" "}
              {baseIRPF === null
                ? ""
                : Number(baseIRPF).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
            </p>
          </div>
          <div
            style={{
              ...styles.box,
              backgroundColor: "#d92027",
            }}
          >
            <p>Desconto IRPF:</p>
            <p style={{ fontSize: "22px" }}>
              R${" "}
              {discountIRPF === null
                ? ""
                : Number(discountIRPF).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}{" "}
              ({percentDiscountIRPF}%)
            </p>
          </div>
          <div
            style={{
              ...styles.box,
              backgroundColor: "#0da039",
            }}
          >
            <p>Salário Liquido:</p>
            <strong style={{ fontSize: "38px" }}>
              R${" "}
              {netSalary === null
                ? ""
                : Number(netSalary).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}{" "}
              ({percentNetSalary}%)
            </strong>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "800px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    minWidth: "150px",
    minHeight: "70px",
    textAlign: "center",
    margin: "15px 15px",
    padding: "20px",
    backgroundColor: "",
    borderRadius: "2%",
    fontSize: "18px",
    textShadow: "0px 1px 2px #000",
    boxShadow: "0px 0px 6px #111",
  },
};
