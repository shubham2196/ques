import React, { Component } from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "../style/quiz.css";
import Score from "./Score";
export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 1,
      questionNumber: 0,
      showScore: false,
      score: 0,
    };
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.handlePreviousQuestion = this.handlePreviousQuestion.bind(this);
    this.scoreCount = this.scoreCount.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleAnswerSubmit() {
    if (this.state.questionNumber < this.props.quizList.length) {
      if (this.props.quizList[this.state.questionNumber].answered) {
        this.setState({
          questionNumber: this.state.questionNumber + 1,
        });
      } else {
        alert("please select a option");
      }
    }
  }
  handlePreviousQuestion(e) {
    if (this.state.questionNumber > 0) {
      this.setState({
        questionNumber: this.state.questionNumber - 1,
      });
    }
  }
  scoreCount(e) {
    for (let i = 0; i < this.props.quizList.length; i++) {
      this.setState((prevState) => {
        return {
          score: prevState.score + this.props.quizList[i].point,
        };
      });
    }
    this.setState({
      showScore: true,
    });
  }
  handleOptionChange(e) {
    this.setState({
      idx: e.target.value,
    });
    this.props.selectAnswer(e.target.value, this.state.questionNumber);
  }
  render() {
    return (
      <div className="quizContainer">
        {this.state.questionNumber < this.props.quizList.length &&
        this.state.questionNumber > 0 ? (
          <div className="previousButton">
            <button onClick={this.handlePreviousQuestion}>Previous</button>
          </div>
        ) : (
          ""
        )}

        <div className="Quiz">
          {this.state.questionNumber < this.props.quizList.length ? (
            <div>
              <h1 style={{ color: "rgb(101, 101, 243)", fontSize: "25px" }}>
                Question No. {this.state.questionNumber + 1}{" "}
              </h1>
              <h1 style={{ fontSize: "20px", marginTop: "40px" }}>
                {this.props.quizList[this.state.questionNumber].question}
              </h1>
              <FormControl component="fieldset" className="optionsForm">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={
                    this.props.quizList[this.state.questionNumber]
                      .selectedOption
                  }
                  onChange={this.handleOptionChange}
                  className="optionsGroup"
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label={
                      this.props.quizList[this.state.questionNumber].options[0]
                        .option
                    }
                    className="option"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label={
                      this.props.quizList[this.state.questionNumber].options[1]
                        .option
                    }
                    className="option"
                    style={{ fontSize: "40px" }}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label={
                      this.props.quizList[this.state.questionNumber].options[2]
                        .option
                    }
                    className="option"
                  />

                  <FormControlLabel
                    value="3"
                    label={
                      this.props.quizList[this.state.questionNumber].options[3]
                        .option
                    }
                    control={<Radio />}
                    className="option"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          ) : (
            <Score
              score={this.state.score}
              scoreCount={this.scoreCount}
              totalQuestions={this.props.quizList.length}
            />
          )}
        </div>
        {this.state.questionNumber < this.props.quizList.length - 1 ? (
          <div className="submitButton">
            <button onClick={this.handleAnswerSubmit}>Next</button>
          </div>
        ) : this.state.questionNumber == this.props.quizList.length - 1 ? (
          <div className="submitButton">
            <button onClick={this.handleAnswerSubmit}>Submit</button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizList: state.questions,
    score: state.score,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: (selectedOption, question_number) => {
      dispatch({
        type: "SELECT",
        payload: {
          selectedOption,
          question_number,
        },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
