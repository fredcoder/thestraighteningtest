import React from "react";
import FadeIn from 'react-fade-in';
import './styles.css';

var angle = 0;

const QuestionForm = (props) => {

    let { backgroundStyles, score, currentPage, backgroundImageUrl, rotationImageUrl, foregroundImageUrl, questionText, questionType,
        originalPosition, rotationDegrees, correctAnswer, showCorrectAnswer, showWrongAnswer } = props;


    return (
        <React.Fragment>
            <div className={backgroundStyles}>
            </div>
            <div className="MainDivStyles">
                <div className="ScoreDivStyles">
                    <p className="ScoreTextStyles">SCORE: {score}/{currentPage + 1}</p>
                </div>
                <div className="OALogoDivStyles">
                    <div>O</div>
                    <div>A</div>
                    <div><span>Ortondontics<br />Australia</span></div>
                </div>
                <FadeIn delay={50} transitionDuration ={800}>
                <div className="ImageDivStyles">
                    <div className="ImageBoxStyles">
                        <img className="ImageBackgroundStyles" src={backgroundImageUrl} alt={`Background_Q${currentPage}`} />
                        {(questionType === "Degrees") &&
                            <img id="rotationImageUrl" className="ImageRotateStyles" src={rotationImageUrl} alt={`Rotate_Q${currentPage}`} onLoad={()=>setInitialPosition(originalPosition)} />
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
                        <div className="AnswerButtonStyles Yes" onClick={()=>rotateImageLeft(rotationDegrees, showCorrectAnswer)}>
                            <span>Left</span>
                        </div>
                        <div className="AnswerButtonStyles No" onClick={()=>rotateImageRight(rotationDegrees, showCorrectAnswer)}>
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
    console.log("originalPosition ",originalPosition);
    if (angle === 0) {
        angle = originalPosition;
        var img = document.getElementById('rotationImageUrl');
        img.style.transform = `rotate(${angle}deg)`;
        console.log("angle ",angle);
    }
}


export function rotateImageLeft(rotationDegrees, showCorrectAnswer) {
    angle = angle - rotationDegrees;
    var img = document.getElementById('rotationImageUrl');

    img.style.transform = `rotate(${angle}deg)`;
    console.log("current angle: ",angle);

    if (angle === 0)
    {
        showCorrectAnswer();
    }
}

export function rotateImageRight(rotationDegrees, showCorrectAnswer) {
    angle = angle + rotationDegrees;
    var img = document.getElementById('rotationImageUrl');

    img.style.transform = `rotate(${angle}deg)`;
    console.log("current angle: ",angle);

    if (angle === 0)
    {
        showCorrectAnswer();
    }
}

export default QuestionForm;