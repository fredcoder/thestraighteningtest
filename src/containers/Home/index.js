import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TimerIcon from '../../assets/images/timer-icon.png';
import Straightening from '../../assets/images/Straightening.png';
import AOLogo from '../../assets/images/AOLogo.jpg';

/* DESKTOP */
import TowerOfPisa from '../../assets/images/Desktop/Q1/Q1_TowerOfPisa_700x700.png';

import ZebraCrossingBackground from '../../assets/images/Desktop/Q2/Q2_Zebra_Crossing_Background_700x700.png';
import ZebraCrossingRotate from '../../assets/images/Desktop/Q2/Q2_Zebra_Crossing_Rotate_700x700.png';

import Optical from '../../assets/images/Desktop/Q3/Q3_Optical_700x700.gif';

import WindowCleanersBackground from '../../assets/images/Desktop/Q4/Q4_Window_Cleaners_Background_700x700.png';
import WindowCleanersRotates from '../../assets/images/Desktop/Q4/Q4_Window_Cleaners_Rotate_700x700.png';
import WindowCleanersBackgroundLines from '../../assets/images/Desktop/Q4/Q4_Window_Cleaners_Lines_700x700.png';

import Signs from '../../assets/images/Desktop/Q5/Q5_Signs_700x700.png';

import Windows from '../../assets/images/Desktop/Q6/Q6_Windows_700x700.png';

import FramedPictureBackground from '../../assets/images/Desktop/Q7/Q7_Framed_Picture_Background_700x700.png';
import FramedPictureRotate from '../../assets/images/Desktop/Q7/Q7_Framed_Picture_Rotate_700x700.png';

import Wall from '../../assets/images/Desktop/Q8/Q8_Wall_700x700.png';

import SeesawBackground from '../../assets/images/Desktop/Q9/Q9_Seesaw_Background_700x700.png';
import SeesawForeground from '../../assets/images/Desktop/Q9/Q9_Seesaw_Foreground_700x700.png';
import SeesawRotate from '../../assets/images/Desktop/Q9/Q9_Seesaw_Rotate_700x700.png';

import Bangs from '../../assets/images/Desktop/Q10/Q10_Bangs_700x700.png';

/* MOBILE */
import Mobile_TowerOfPisa from '../../assets/images/Mobile/Q1/Q1_TowerOfPisa_480x620.png';
import Mobile_TowerOfPisaLines from '../../assets/images/Mobile/Q1/Q1_TowerOfPisa_Lines_480x620.png';

import Mobile_ZebraCrossingBackground from '../../assets/images/Mobile/Q2/Q2_Zebra_Crossing_Background_480x620.png';
import Mobile_ZebraCrossingRotate from '../../assets/images/Mobile/Q2/Q2_Zebra_Crossing_Rotate_480x620.png';
import Mobile_ZebraCrossingLines from '../../assets/images/Mobile/Q2/Q2_Zebra_Crossing_Lines_480x620.png';

/*import Mobile_Optical from '../../assets/images/Mobile/Q3/Q3_Optical_480x620.gif';*/

import Mobile_WindowCleanersBackground from '../../assets/images/Mobile/Q4/Q4_Window_Cleaners_Background_480x620.png';
import Mobile_WindowCleanersRotates from '../../assets/images/Mobile/Q4/Q4_Window_Cleaners_Rotate_480x620.png';
import Mobile_WindowCleanersBackgroundLines from '../../assets/images/Mobile/Q4/Q4_Window_Cleaners_Lines_480x620.png';

import Mobile_Signs from '../../assets/images/Mobile/Q5/Q5_Signs_480x620.png';
import Mobile_Signs_Lines from '../../assets/images/Mobile/Q5/Q5_Signs_Lines_480x620.png';

import Mobile_Windows from '../../assets/images/Mobile/Q6/Q6_Windows_480x620.png';
import Mobile_Windows_Lines from '../../assets/images/Mobile/Q6/Q6_Windows_Lines_480x620.png';

import Mobile_FramedPictureBackground from '../../assets/images/Mobile/Q7/Q7_Framed_Picture_Background_480x620.png';
import Mobile_FramedPictureRotate from '../../assets/images/Mobile/Q7/Q7_Framed_Picture_Rotate_480x620.png';
import Mobile_FramedPictureLines from '../../assets/images/Mobile/Q7/Q7_Framed_Picture_Lines_480x620.png';

import Mobile_Wall from '../../assets/images/Mobile/Q8/Q8_Wall_480x620.png';
import Mobile_Wall_Lines from '../../assets/images/Mobile/Q8/Q8_Wall_Lines_480x620.png';

import Mobile_SeesawBackground from '../../assets/images/Mobile/Q9/Q9_Seesaw_Background_480x620.png';
import Mobile_SeesawForeground from '../../assets/images/Mobile/Q9/Q9_Seesaw_Foreground_480x620.png';
import Mobile_SeesawRotate from '../../assets/images/Mobile/Q9/Q9_Seesaw_Rotate_480x620.png';
import Mobile_SeesawLines from '../../assets/images/Mobile/Q9/Q9_Seesaw_Lines_480x620.png';

import Mobile_Bangs from '../../assets/images/Mobile/Q10/Q10_Bangs_480x620.png';
import Mobile_Bangs_Lines from '../../assets/images/Mobile/Q10/Q10_Bangs_Lines_480x620.png';

import Explosion from '../../assets/images/explosion.png';
import Confetti from '../../assets/images/confetti.png';
import DottedLine from '../../assets/images/dotted-line_200_200.png';

import QuestionForm from '../../components/QuestionForm';
import AnswerForm from '../../components/AnswerForm';
import ResponseForm from '../../components/ResponseForm';

import './styles.css';

class Home extends Component {

    constructor(props) {

        var screeWidth = window.innerWidth

        super(props);

        this.state = {
            questionary: [
                {
                    questionNumber: 1,
                    questionText: "Is the Leaning Tower of Pisa straight?",
                    questionType: "YesOrNo",
                    correctAnswer: "No",
                    originalPosition: 0,
                    rotationDegrees: 0,
                    backgroundImageUrl: (screeWidth > 540) ? TowerOfPisa : Mobile_TowerOfPisa,
                    rotationImageUrl: "",
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_TowerOfPisaLines,
                },
                {
                    questionNumber: 2,
                    questionText: "Can you straighten the zebra crossing?",
                    questionType: "Degrees",
                    correctAnswer: "0",
                    originalPosition: -9,
                    rotationDegrees: 1,
                    backgroundImageUrl: (screeWidth > 540) ? ZebraCrossingBackground : Mobile_ZebraCrossingBackground,
                    rotationImageUrl: (screeWidth > 540) ? ZebraCrossingRotate : Mobile_ZebraCrossingRotate,
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_ZebraCrossingLines,
                },
                {
                    questionNumber: 3,
                    questionText: "Are the pink lines straight?",
                    questionType: "YesOrNo",
                    correctAnswer: "Yes",
                    originalPosition: 0,
                    rotationDegrees: 0,
                    backgroundImageUrl: (screeWidth > 540) ? Optical : Optical,
                    rotationImageUrl: "",
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : DottedLine
                },
                {
                    questionNumber: 4,
                    questionText: "Can you straighten the platform?",
                    questionType: "Degrees",
                    correctAnswer: "0",
                    originalPosition: 6,
                    rotationDegrees: 0.5,
                    backgroundImageUrl: (screeWidth > 540) ? WindowCleanersBackground : Mobile_WindowCleanersBackground,
                    rotationImageUrl: (screeWidth > 540) ? WindowCleanersRotates : Mobile_WindowCleanersRotates,
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? WindowCleanersBackgroundLines : Mobile_WindowCleanersBackgroundLines
                },
                {
                    questionNumber: 5,
                    questionText: "Is the stop sign straight?",
                    questionType: "YesOrNo",
                    correctAnswer: "No",
                    originalPosition: 0,
                    rotationDegrees: 0,
                    backgroundImageUrl: (screeWidth > 540) ? Signs : Mobile_Signs,
                    rotationImageUrl: "",
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_Signs_Lines
                },
                {
                    questionNumber: 6,
                    questionText: "Are the bottoms of the windows straight?",
                    questionType: "YesOrNo",
                    correctAnswer: "No",
                    originalPosition: 0,
                    rotationDegrees: 0,
                    backgroundImageUrl: (screeWidth > 540) ? Windows : Mobile_Windows,
                    rotationImageUrl: "",
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_Windows_Lines
                },
                {
                    questionNumber: 7,
                    questionText: "Can you straighten the picture frame?",
                    questionType: "Degrees",
                    correctAnswer: "0",
                    originalPosition: 8,
                    rotationDegrees: 0.5,
                    backgroundImageUrl: (screeWidth > 540) ? FramedPictureBackground : Mobile_FramedPictureBackground,
                    rotationImageUrl: (screeWidth > 540) ? FramedPictureRotate : Mobile_FramedPictureRotate,
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_FramedPictureLines
                },
                {
                    questionNumber: 8,
                    questionText: "Is the top of the brick wall straight?",
                    questionType: "YesOrNo",
                    correctAnswer: "Yes",
                    originalPosition: 0,
                    rotationDegrees: 0,
                    backgroundImageUrl: (screeWidth > 540) ? Wall : Mobile_Wall,
                    rotationImageUrl: "",
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_Wall_Lines
                },
                {
                    questionNumber: 9,
                    questionText: "Can you straighten this see-saw?",
                    questionType: "Degrees",
                    correctAnswer: "0",
                    originalPosition: -10,
                    rotationDegrees: 0.5,
                    backgroundImageUrl: (screeWidth > 540) ? SeesawBackground : Mobile_SeesawBackground,
                    rotationImageUrl: (screeWidth > 540) ? SeesawRotate : Mobile_SeesawRotate,
                    foregroundImageUrl: (screeWidth > 540) ? SeesawForeground : Mobile_SeesawForeground,
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_SeesawLines
                },
                {
                    questionNumber: 10,
                    questionText: "Is this fringe really straight?",
                    questionType: "YesOrNo",
                    correctAnswer: "No",
                    originalPosition: 0,
                    rotationDegrees: 0,
                    backgroundImageUrl: (screeWidth > 540) ? Bangs : Mobile_Bangs,
                    rotationImageUrl: "",
                    foregroundImageUrl: "",
                    dottedImageUrl: (screeWidth > 540) ? DottedLine : Mobile_Bangs_Lines
                },
            ],
            currentPage: -1,
            score: 0,
            isQuestioning: true,
            isShowingAnswer: false,
            isCorrectAnswered: false,
            lastPositionSelected: 360
        }
    }

    countdown = 0;
    timeOut = 0;

    refreshCountdown = () => {

        console.log("refreshCountdown");
        const thisShowWrongAnswer = this.showWrongAnswer.bind(this);
        const thisShowCorrectAnswer = this.showCorrectAnswer.bind(this);
        const thisStopCountdown = this.stopCountdown.bind(this);
        const thisGetLastPosition = this.getLastPosition.bind(this);

        var seconds = document.getElementById("countdown").textContent;

        this.countdown = setInterval(function () {
            seconds--;
            try {
                document.getElementById("countdown").textContent = "0" + seconds / 100;

                if (seconds <= 0) {
                    thisStopCountdown();
                    document.getElementById("countdown").textContent = "00.00";
                    console.log("seconds: ", seconds);
                    if (seconds === 0) {
                        if (thisGetLastPosition() === 0) {
                            thisShowCorrectAnswer();
                            return;
                        }
                        else {
                            thisShowWrongAnswer();
                            return;
                        }
                    }
                }
            } catch {
                thisStopCountdown();
            }

        }, 10);
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
        this.timeOut = setTimeout(() => {
            thisGetWrongPage();
        }, 2000);
    }

    getCorrectPage = () => {
        let { score, isQuestioning, isShowingAnswer } = this.state;


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
        document.getElementById("countdown").textContent = 1000;
        this.refreshCountdown();
    }

    setLastPosition = (value) => {
        this.setState({ lastPositionSelected: value });
    }

    getLastPosition = () => {
        let { lastPositionSelected } = this.state;
        return lastPositionSelected;
    }

    render() {
        let { questionary, currentPage, score, isQuestioning, isShowingAnswer, isCorrectAnswered } = this.state;

        if (currentPage === -1) {
            return (
                <React.Fragment>
                    <span id="countdown" hidden="hidden">10.00</span>
                    <div className="BackgroundYellowDivStyles">
                        <div className="OALogoDivStyles">
                            <img src={AOLogo} alt="AOLogo"/>
                        </div>
                        <div className="HomeImageDivStyles">
                            <img src={Straightening} alt="Straightening"/>
                        </div>
                        <div className="HomeTitleDivStyles">
                            <p>It takes a certain type of person to ace this test.</p>
                        </div>
                        <div className="HomeSubtitleDivStyles">
                            <p>Can you get 10/10?</p>
                        </div>
                        <div className="HomeButtonDivStyles">
                            <div className="HomeButtonStyles" onClick={this.getNextPage}>
                                Play
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            if (isQuestioning) {
                debugger;
                return (
                    <React.Fragment>
                        <div className="TimerDivStyles">
                            <div className="TimeBoxStyles">
                                <div className="TimerIconBoxStyles">
                                    <img className="TimerIconStyles" src={TimerIcon} alt="Timer Icon" />
                                </div>
                                <div className="TimerTextBoxStyles">
                                    <div className="TimerTextStyles"><span id="countdown">1000</span></div>
                                </div>
                            </div>
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
                            originalPosition={questionary[currentPage].originalPosition}
                            rotationDegrees={questionary[currentPage].rotationDegrees}
                            showCorrectAnswer={this.showCorrectAnswer}
                            showWrongAnswer={this.showWrongAnswer}
                            setLastPosition={(val) => this.setLastPosition(val)}
                        />
                    </React.Fragment>
                )
            }
            else if (isShowingAnswer) {
                debugger;
                return (
                    <React.Fragment>
                        <div className="TimerDivStyles">
                            <div className="TimeBoxStyles">
                                <div className="TimerIconBoxStyles">
                                    <img className="TimerIconStyles" src={TimerIcon} alt="Timer Icon" />
                                </div>
                                <div className="TimerTextBoxStyles">
                                    <div className="TimerTextStyles"><span id="countdown">1000</span></div>
                                </div>
                            </div>
                        </div>
                        <AnswerForm
                            backgroundStyles={"BackgroundPinkDivStyles"}
                            score={score}
                            currentPage={currentPage}
                            backgroundImageUrl={questionary[currentPage].backgroundImageUrl}
                            rotationImageUrl={questionary[currentPage].rotationImageUrl}
                            foregroundImageUrl={questionary[currentPage].foregroundImageUrl}
                            dottedImageUrl={questionary[currentPage].dottedImageUrl}
                            questionText={questionary[currentPage].questionText}
                            questionType={questionary[currentPage].questionType}
                            correctAnswer={questionary[currentPage].correctAnswer}
                            isCorrectAnswered={isCorrectAnswered}
                        />
                    </React.Fragment>
                )
            }
            else {
                debugger;
                return (
                    <React.Fragment>
                        <div className="TimerDivStyles">
                            <div className="TimeBoxStyles">
                                <div className="TimerIconBoxStyles">
                                    <img className="TimerIconStyles" src={TimerIcon} alt="Timer Icon" />
                                </div>
                                <div className="TimerTextBoxStyles">
                                    <div className="TimerTextStyles"><span id="countdown">1000</span></div>
                                </div>
                            </div>
                        </div>
                        <ResponseForm
                            backgroundStyles={"BackgroundPinkDivStyles"}
                            score={score}
                            currentPage={currentPage}
                            backgroundImageUrl={questionary[currentPage].backgroundImageUrl}
                            rotationImageUrl={questionary[currentPage].rotationImageUrl}
                            foregroundImageUrl={questionary[currentPage].foregroundImageUrl}
                            dottedImageUrl={questionary[currentPage].dottedImageUrl}
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