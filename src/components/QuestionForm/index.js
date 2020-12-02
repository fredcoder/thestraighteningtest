import React from "react";
import './styles.css';


const QuestionForm = (props) => {

    let { backgroundStyles, score, currentPage, backgroundImageUrl, rotationImageUrl, foregroundImageUrl, questionText, questionType, correctAnswer, showCorrectAnswer, showWrongAnswer, getNextPage} = props;

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
                <div className="ImageDivStyles">
                    <div className="ImageBoxStyles">
                        <img className="ImageBackgroundStyles" src={backgroundImageUrl} alt={`Background_Q${currentPage}`} />
                        {(questionType === "Degrees") &&
                            <img className="ImageRotateStyles" src={rotationImageUrl} alt={`Rotate_Q${currentPage}`} />
                        }
                        {(foregroundImageUrl != "") &&
                            <img className="ImageForegroundStyles" src={foregroundImageUrl} alt={`Foreground_Q${currentPage}`} />
                        }
                    </div>
                </div>
                <div className="QuestionDivStyles">{questionText}</div>
                {(questionType === "YesOrNot") &&
                    <div className="AnswerOptionsStyles">
                        <p className="AnswerButtonStyles Yes" onClick={(correctAnswer === "Yes") ? showCorrectAnswer : showWrongAnswer}>
                            <span>Yes</span>
                        </p>
                        <p className="AnswerButtonStyles No" onClick={(correctAnswer === "No") ? showCorrectAnswer : showWrongAnswer}>
                            <span>No</span>
                        </p>
                    </div>
                }
                {(questionType === "Degrees") &&
                    <div className="AnswerOptionsStyles">
                        <p className="AnswerButtonStyles Yes" onClick={getNextPage}>
                            <span>Left</span>
                        </p>
                        <p className="AnswerButtonStyles No" onClick={getNextPage}>
                            <span>Right</span>
                        </p>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default QuestionForm;