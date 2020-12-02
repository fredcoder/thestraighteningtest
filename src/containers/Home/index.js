import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TimerIcon from '../../assets/images/timer-icon.png';
import TowerOfPisa from '../../assets/images/Q1/Q1_TowerOfPisa_700x700.png';
import ZebraCrossingBackground from '../../assets/images/Q2/Q2_Zebra Crossing_Background_700x700.png';
import ZebraCrossingRotate from '../../assets/images/Q2/Q2_Zebra Crossing_Rotate_700x700.png';
import Optical from '../../assets/images/Q3/Q3_Optical_700x700.gif';
import WindowCleanersBackground from '../../assets/images/Q4/Q4_Window_Cleaners_Background_700x700.png';
import WindowCleanersCables from '../../assets/images/Q4/Q4_Window_Cleaners_Cables_700x700.png';
import WindowCleanersRotates from '../../assets/images/Q4/Q4_Window_Cleaners_Rotate_700x700.png';
import Signs from '../../assets/images/Q5/Q5_Signs_700x700.png';
import Windows from '../../assets/images/Q6/Q6_Windows_700x700.png';
import FramedPictureBackground from '../../assets/images/Q7/Q7_Framed Picture_Background_700x700.png';
import FramedPictureRotate from '../../assets/images/Q7/Q7_Framed Picture_Rotate_700x700.png';
import Wall from '../../assets/images/Q8/Q8_Wall_700x700.png';
import SeesawBackground from '../../assets/images/Q9/Q9_Seesaw_Background_700x700.png';
import SeesawForeground from '../../assets/images/Q9/Q9_Seesaw_Foreground_700x700.png';
import SeesawRotate from '../../assets/images/Q9/Q9_Seesaw_Rotate_700x700.png';
import Bangs from '../../assets/images/Q10/Q10_Bangs_700x700.png';
import Explosion from '../../assets/images/explosion.png';
import Confetti from '../../assets/images/confetti.png';

import QuestionForm from '../../components/QuestionForm';
import AnswerForm from '../../components/AnswerForm';
import ResponseForm from '../../components/ResponseForm';

import './styles.css';

class Home extends Component {

    state = {
        questionary: [
            {
                questionNumber: 1,
                questionText: "Is the Leaning Tower of Pisa straight?",
                questionType: "YesOrNot",
                correctAnswer: "No",
                originalRotation: 0,
                rotationDegrees: 0,
                backgroundImageUrl: TowerOfPisa,
                rotationImageUrl: "",
                foregroundImageUrl: ""
            },
         /*    {
                questionNumber: 2,
                questionText: "Can you straighten the zebra crossing?",
                questionType: "Degrees",
                correctAnswer: "45",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: ZebraCrossingBackground,
                rotationImageUrl: ZebraCrossingRotate,
                foregroundImageUrl: ""
            },
       */      {
                questionNumber: 3,
                questionText: "Are the pink lines straight?",
                questionType: "YesOrNot",
                correctAnswer: "Yes",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: Optical,
                rotationImageUrl: "",
                foregroundImageUrl: ""
            },
    /*         {
                questionNumber: 4,
                questionText: "Can you straighten the platform?",
                questionType: "Degrees",
                correctAnswer: "45",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: WindowCleanersBackground,
                rotationImageUrl: WindowCleanersRotates,
                foregroundImageUrl: WindowCleanersCables
            },
      */      {
                questionNumber: 5,
                questionText: "Is the stop sign straight?",
                questionType: "YesOrNot",
                correctAnswer: "No",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: Signs,
                rotationImageUrl: "",
                foregroundImageUrl: ""
            },
            {
                questionNumber: 6,
                questionText: "Are the bottoms of the windows straight?",
                questionType: "YesOrNot",
                correctAnswer: "No",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: Windows,
                rotationImageUrl: "",
                foregroundImageUrl: ""
            },
   /*          {
                questionNumber: 7,
                questionText: "Can you straighten the picture frame?",
                questionType: "Degrees",
                correctAnswer: "45",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: FramedPictureBackground,
                rotationImageUrl: FramedPictureRotate,
                foregroundImageUrl: ""
            },
        */    {
                questionNumber: 8,
                questionText: "Is the top of the brick wall straight?",
                questionType: "YesOrNot",
                correctAnswer: "Yes",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: Wall,
                rotationImageUrl: "",
                foregroundImageUrl: ""
            },
   /*          {
                questionNumber: 9,
                questionText: "Can you straighten this see-saw?",
                questionType: "Degrees",
                correctAnswer: "45",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: SeesawBackground,
                rotationImageUrl: SeesawRotate,
                foregroundImageUrl: SeesawForeground
           },
   */         {
                questionNumber: 10,
                questionText: "Is this fringe really straight?",
                questionType: "YesOrNot",
                correctAnswer: "No",
                originalRotation: 90,
                rotationDegrees: 5,
                backgroundImageUrl: Bangs,
                rotationImageUrl: "",
                foregroundImageUrl: ""
            },
        ],
        currentPage: -1,
        score: 0,
        isQuestioning: true,
        isShowingAnswer: false,
        isCorrectAnswered: false
    }

    countdown = 0;
    timeOut = 0;

    refreshCountdown = () => {
        console.log("refreshCountdown");
        const thisShowWrongAnswer = this.showWrongAnswer.bind(this);
        const thisStopCountdown = this.stopCountdown.bind(this);

        var seconds = document.getElementById("countdown").textContent;
        this.countdown = setInterval(function () {
            seconds--;
            try {
                document.getElementById("countdown").textContent = seconds;

                if (seconds <= 0) {
                    thisStopCountdown();
                    document.getElementById("countdown").textContent = 0;
                    console.log("seconds: ", seconds);
                    if (seconds === 0) {
                        thisShowWrongAnswer();
                    }
                    return;
                }
            } catch {
                thisStopCountdown();
            }

        }, 1000);
    }

    stopCountdown = () => {
        clearInterval(this.countdown);
    }

    stopTimeOut = () => {
        clearTimeout(this.timeOut);
    }

    showCorrectAnswer = () => {
        let { isQuestioning, isShowingAnswer, isCorrectAnswered } = this.state;
        const thisGetCorrectPage = this.getCorrectPage.bind(this);

        this.stopCountdown();

        isQuestioning = false;
        isShowingAnswer = true;
        isCorrectAnswered = true;

        this.setState({
            isQuestioning,
            isShowingAnswer,
            isCorrectAnswered
        })

        this.timeOut = setTimeout(() => {
            thisGetCorrectPage();
        }, 2000);
    }

    showWrongAnswer = () => {
        let { isQuestioning, isShowingAnswer, isCorrectAnswered } = this.state;
        const thisGetWrongPage = this.getWrongPage.bind(this);

        this.stopCountdown();

        isQuestioning = false;
        isShowingAnswer = true;
        isCorrectAnswered = false;

        this.setState({
            isQuestioning,
            isShowingAnswer,
            isCorrectAnswered
        })
        debugger;
        this.timeOut = setTimeout(() => {
            thisGetWrongPage();
        }, 2000);
    }

    getCorrectPage = () => {
        let { score, isQuestioning, isShowingAnswer } = this.state;

        debugger;
        console.log("getCorrectPage");
        this.stopTimeOut();

        score = score + 1;
        isQuestioning = false;
        isShowingAnswer = false;

        this.setState({
            score,
            isQuestioning,
            isShowingAnswer
        });
    }

    getWrongPage = () => {
        let { isQuestioning, isShowingAnswer } = this.state;

        debugger;
        console.log("getWrongPage");
        this.stopTimeOut();

        isQuestioning = false;
        isShowingAnswer = false;

        this.setState({
            isQuestioning,
            isShowingAnswer
        });
    }

    getNextPage = () => {
        this.setState({
            currentPage: (this.state.currentPage + 1),
            isQuestioning: true
        })
        document.getElementById("countdown").textContent = 10;
        this.refreshCountdown();
    }

    render() {
        let { questionary, currentPage, score, isQuestioning, isShowingAnswer, isCorrectAnswered } = this.state;

        if (currentPage === -1) {
            return (
                <React.Fragment>
                    <span id="countdown" hidden="hidden">10</span>
                    <div className="BackgroundYellowDivStyles">
                        <div className="OALogoDivStyles">
                            <div>O</div>
                            <div>A</div>
                            <div><span>Ortondontics<br />Australia</span></div>
                        </div>
                        <div className="HomeImageDivStyles">
                            Image
                        </div>
                        <div className="HomeTitleDivStyles">
                            <p>It takes a certain type of person to ace this test.</p>
                        </div>
                        <div className="HomeSubtitleDivStyles">
                            <p>Can you get 10/10?</p>
                        </div>
                        <div className="HomeButtonDivStyles">
                            <p className="HomeButtonStyles" onClick={this.getNextPage}>
                                <span>Play</span>
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            if (isQuestioning) {
                return (
                    <React.Fragment>
                        <div className="TimerDivStyles">
                            <img className="TimerIconStyles" src={TimerIcon} alt="Timer Icon" />
                            <div className="TimerTextStyles">00.<span id="countdown">10</span></div>
                        </div>
                        <QuestionForm
                            backgroundStyles={"BackgroundPinkDivStyles"}
                            score={score}
                            currentPage={currentPage}
                            backgroundImageUrl={questionary[currentPage].backgroundImageUrl}
                            rotationImageUrl={questionary[currentPage].rotationImageUrl}
                            foregroundImageUrl={questionary[currentPage].foregroundImageUrl}
                            questionText={questionary[currentPage].questionText}
                            questionType={questionary[currentPage].questionType}
                            correctAnswer={questionary[currentPage].correctAnswer}
                            showCorrectAnswer={this.showCorrectAnswer}
                            showWrongAnswer={this.showWrongAnswer}
                            getNextPage={this.getNextPage}
                        />
                    </React.Fragment>
                )
            }
            else if (isShowingAnswer) {
                return (
                    <React.Fragment>
                        <div className="TimerDivStyles">
                            <img className="TimerIconStyles" src={TimerIcon} alt="Timer Icon" />
                            <div className="TimerTextStyles">00.<span id="countdown">10</span></div>
                        </div>
                        <AnswerForm
                            backgroundStyles={"BackgroundPinkDivStyles"}
                            score={score}
                            currentPage={currentPage}
                            backgroundImageUrl={questionary[currentPage].backgroundImageUrl}
                            rotationImageUrl={questionary[currentPage].rotationImageUrl}
                            foregroundImageUrl={questionary[currentPage].foregroundImageUrl}
                            questionText={questionary[currentPage].questionText}
                            questionType={questionary[currentPage].questionType}
                            correctAnswer={questionary[currentPage].correctAnswer}
                            isCorrectAnswered={isCorrectAnswered}
                        />
                    </React.Fragment>
                )
            }
            else {
                return (
                    <React.Fragment>
                        <div className="TimerDivStyles">
                            <img className="TimerIconStyles" src={TimerIcon} alt="Timer Icon" />
                            <div className="TimerTextStyles">00.<span id="countdown">10</span></div>
                        </div>
                        <ResponseForm
                            backgroundStyles={"BackgroundPinkDivStyles"}
                            score={score}
                            currentPage={currentPage}
                            backgroundImageUrl={questionary[currentPage].backgroundImageUrl}
                            rotationImageUrl={questionary[currentPage].rotationImageUrl}
                            foregroundImageUrl={questionary[currentPage].foregroundImageUrl}
                            questionType={questionary[currentPage].questionType}
                            isCorrectAnswered={isCorrectAnswered}
                            getNextPage={this.getNextPage}
                        />
                    </React.Fragment>
                )
            }
        }
    }
}

export default Home;