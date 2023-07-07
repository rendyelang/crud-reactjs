import React, { Component } from "react";
import BackComponents from "../components/BackComponents";

export default class DetailUserContainer extends Component {
  render() {
    return (
      <div className="container py-10">
        <BackComponents />
        <p>Detail User</p>
      </div>
    );
  }
}
