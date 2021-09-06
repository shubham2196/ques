import React, { Component } from "react";
import "../style/score.css";
export class Score extends Component {
  componentDidMount() {
    this.props.scoreCount();
  }
  render() {
    return (
      <div className="scoreBoard">
        <div className="scoreContainer">
          <div className="scores">
            <h2>{(this.props.score / this.props.totalQuestions) * 100} %</h2>
            <h2>
              {this.props.score} / {this.props.totalQuestions} Score
            </h2>
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: "40px" }}>Congratulations</h1>
        </div>
      </div>
    );
  }
}

export default Score;
