import React from "react";
import FadeIn from 'react-fade-in';
import './styles.css';

import AOLogo from '../../assets/images/AOLogo.jpg';

var angle = 0;

const QuestionForm = (props) => {

    let { backgroundStyles, score, currentPage, backgroundImageUrl, rotationImageUrl, foregroundImageUrl, questionText, questionType,
        originalPosition, rotationDegrees, correctAnswer, showCorrectAnswer, showWrongAnswer, setLastPosition } = props;


    return (
        <React.Fragment>
            <div className={backgroundStyles}>
            </div>
            <div className="MainDivStyles">
                <div className="ScoreDivStyles">
                    <p className="ScoreTextStyles">SCORE: {score}/{currentPage + 1}</p>
                </div>
                <div className="OALogoDivStyles">
                    <img src={AOLogo} alt="AOLogo" />
                </div>
                <FadeIn delay={50} transitionDuration={800}>
                    <div className="ImageDivStyles">
                        <div className="ImageBoxStyles">
                            <img className="ImageBackgroundStyles" src={backgroundImageUrl} alt={`Background_Q${currentPage}`} />
                            {(questionType === "Degrees") &&
                                <img id="rotationImageUrl" className="ImageRotateStyles" src={rotationImageUrl} alt={`Rotate_Q${currentPage}`} onLoad={() => setInitialPosition(originalPosition)} />
                            }
                            {(foregroundImageUrl != "") &&
                                <img className="ImageForegroundStyles" src={foregroundImageUrl} alt={`Foreground_Q${currentPage}`} />
                            }
                        </div>
                    </div>
                </FadeIn>
                <div className="QuestionDivStyles">{questionText}</div>
                {(questionType === "YesOrNo") &&
                    <div className="AnswerOptionsStyles">
                        <div className="AnswerButtonStyles Yes" onClick={(correctAnswer === "Yes") ? showCorrectAnswer : showWrongAnswer}>
                            <span>Yes</span>
                        </div>
                        <div className="AnswerButtonStyles No" onClick={(correctAnswer === "No") ? showCorrectAnswer : showWrongAnswer}>
                            <span>No</span>
                        </div>
                    </div>
                }
                {(questionType === "Degrees") &&
                    <div className="AnswerOptionsStyles">
                        <div className="AnswerButtonStyles Yes" onClick={() => rotateImageLeft(rotationDegrees, setLastPosition)}>
                            <span>Left</span>
                        </div>
                        <div className="AnswerButtonStyles No" onClick={() => rotateImageRight(rotationDegrees, setLastPosition)}>
                            <span>Right</span>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}


export function setInitialPosition(originalPosition) {
    debugger;
    console.log("originalPosition ", originalPosition);
    angle = originalPosition;
    var img = document.getElementById('rotationImageUrl');
    img.style.transform = `rotate(${angle}deg)`;
    console.log("angle ", angle);
}


export function rotateImageLeft(rotationDegrees, setLastPosition) {
    angle = angle - rotationDegrees;
    var img = document.getElementById('rotationImageUrl');

    img.style.transform = `rotate(${angle}deg)`;
    console.log("current angle: ", angle);

    setLastPosition(angle);
}

export function rotateImageRight(rotationDegrees, setLastPosition) {
    angle = angle + rotationDegrees;
    var img = document.getElementById('rotationImageUrl');

    img.style.transform = `rotate(${angle}deg)`;
    console.log("current angle: ", angle);

    setLastPosition(angle);
}

export default QuestionForm;