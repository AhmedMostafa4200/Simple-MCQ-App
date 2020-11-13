import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllQuestions } from "../actions/QuestionAction";
import "./Question.css";

const Exam = (props) => {
  const [randomPickedQuests, setRandomPickedQuests] = useState([]);

  useEffect(() => {
    props.getAllQuestions();
  }, []);

  useEffect(() => {
    if (props.quest.length) {
      const randomQuests = [];
      // loop to get random questions then set in randomQ state
      while (randomQuests.length < 5) {
        var randomNumber = Math.floor(Math.random() * props.quest.length);
        if (randomQuests.indexOf(props.quest[randomNumber]) == -1) {
          randomQuests.push(props.quest[randomNumber]);
        }
      }
      setRandomPickedQuests(randomQuests);
    }
  }, [props.quest]);

  let [questNum, setQuestNum] = useState(0);
  let [res, setRes] = useState(0);
  let value;
  let [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    e.target.checked = true;
    e.preventDefault();
    value = e.target.value;
  };

  const handleSubmit = (e) => {
    e.target.checked = false;
    e.preventDefault();
    if (questNum < 5 && randomPickedQuests[questNum].correctAnswer == value) {
      setRes(res + 20);
    }
    if (questNum < 5) {
      setQuestNum(questNum + 1);
    }
    if (questNum == 4) {
      if (randomPickedQuests[questNum].correctAnswer == value) {
        res = res + 20;
      }
      props.history.push(`/score?totalScore=${res}`);
    }
  };

  return (
    <React.Fragment>
      {randomPickedQuests.length ? (
        <div className="big-container">
          <img
            className="big-container__background-img"
            src="/assets/itiBuilding.jpg"
            alt="a"
          />
          <div className="questions-logo-container">
            <div className="logo-part">
              <img
                className="logo-part-img"
                src="/assets/itiLogo.jpg"
                alt="a"
              />
              <h3 className="logo-part-header">Master-Linux Exam</h3>
            </div>
            <div className="questions-part">
              <div className="questions-part__left-side">
                <div className="questions-part__question-number">
                  Q# {questNum + 1}
                </div>
                <div className="questions-part__question-and-choices">
                  <div className="questions-part__question">
                    {randomPickedQuests[questNum].q}
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="questions-part__answers"
                  >
                    <div className="first-choice">
                      <input
                        name="choice"
                        onMouseDown={handleChange}
                        value={randomPickedQuests[questNum].a1}
                        id="radio-firstChoice"
                        className="questions-part__first-choice-radio radio"
                        type="radio"
                        checked={isChecked}
                      />
                      <label
                        htmlFor="radio-firstChoice"
                        className="questions-part__first-choice ml-3"
                      >
                        {randomPickedQuests[questNum].a1}
                      </label>
                    </div>
                    <div className="second-choice">
                      <input
                        name="choice"
                        onMouseDown={handleChange}
                        value={randomPickedQuests[questNum].a2}
                        id="radio-secondChoice"
                        className="questions-part__second-choice-radio radio"
                        type="radio"
                        checked={isChecked}
                      />
                      <label
                        htmlFor="radio-secondChoice"
                        className="questions-part__second-choice ml-3"
                      >
                        {randomPickedQuests[questNum].a2}
                      </label>
                    </div>
                    <div className="third-choice">
                      <input
                        name="choice"
                        onMouseDown={handleChange}
                        value={randomPickedQuests[questNum].a3}
                        id="radio-thirdChoice"
                        className="questions-part__third-choice-radio radio"
                        type="radio"
                        checked={isChecked}
                      />
                      <label
                        htmlFor="radio-thirdChoice"
                        className="questions-part__third-choice ml-3"
                      >
                        {randomPickedQuests[questNum].a3}
                      </label>
                    </div>
                    <div className="fourth-choice">
                      <input
                        name="choice"
                        onMouseDown={handleChange}
                        value={randomPickedQuests[questNum].a4}
                        id="radio-fourthChoice"
                        className="questions-part__fourth-choice-radio radio"
                        type="radio"
                        checked={isChecked}
                      />
                      <label
                        htmlFor="radio-fourthChoice"
                        className="questions-part__fourth-choice ml-3"
                      >
                        {randomPickedQuests[questNum].a4}
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Next
                    </button>
                  </form>
                </div>
                <div className="questions-part__btns">
                  {/* <div className="questions-part__prev-btn btn">Previous</div>
                 <div className="questions-part__mark-btn btn">Mark</div> */}
                  {/* <div
                   onClick={handleNext}
                   className="questions-part__next-btn btn text-light"
                 >
                   Next
                 </div> */}
                </div>
              </div>
              <div className="questions-right-part" />
            </div>
          </div>
          {/* <div className="questions-part__finish-btn btn">Finish</div> */}
        </div>
      ) : null}
    </React.Fragment>
  );
};

// export default Exam;
function mapStateToProps(state) {
  return {
    quest: state.quest.items,
  };
}

export default withRouter(connect(mapStateToProps, { getAllQuestions })(Exam));
