import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class Otpinput extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });
  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        containerStyle={{ margin: "30px 25px" }}
        focusStyle={{ border: "1px solid #e85826", outline: "none" }}
        inputStyle={{
          marginRight: "10px",
          width: "40px",
          height: "40px",
          fontSize: "14px",
        }}
      />
    );
  }
}
