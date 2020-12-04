import React from "react";
import './styles.css';


const AnswerForm = (props) => {

    let { backgroundStyles, score, currentPage, backgroundImageUrl, rotationImageUrl, foregroundImageUrl, dottedImageUrl, questionText, questionType, correctAnswer, isCorrectAnswered } = props;

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
                        {(questionType === "YesOrNo") &&
                            <img className="ImageDottedStyles" src={dottedImageUrl} alt={`Dotted_Q${currentPage}`} />
                        }                     
                        {(questionType === "Degrees") &&
                        <React.Fragment>
                            <img className="ImageDottedStyles" src={dottedImageUrl} alt={`Dotted_Q${currentPage}`} />
                            <img className="ImageRotateStyles RotateAdjustment" src={rotationImageUrl} alt={`Rotate_Q${currentPage}`} />                            
                        </React.Fragment>
                        }
                        {(foregroundImageUrl != "") &&
                            <img className="ImageForegroundStyles ForegroundAdjustment" src={foregroundImageUrl} alt={`Foreground_Q${currentPage}`} />
                        }                        
                    </div>
                </div>
                <div className="QuestionDivStyles">{questionText}</div>
                {(questionType === "YesOrNo") &&
                    <div className="AnswerOptionsStyles">
                        {(isCorrectAnswered)
                            ?
                            <React.Fragment>
                                <div className={`AnswerButtonStyles Yes ${(correctAnswer === "Yes") ? "Green" : ""}`}>
                                    <span>Yes</span>
                                </div>
                                <div className={`AnswerButtonStyles No ${(correctAnswer === "No") ? "Green" : ""}`}>
                                    <span>No</span>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                {(document.getElementById("countdown").textContent === "0")
                                    ?
                                    <React.Fragment>
                                        <p className={`AnswerButtonStyles Yes`}>
                                            <span>Yes</span>
                                        </p>
                                        <p className={`AnswerButtonStyles No`}>
                                            <span>No</span>
                                        </p>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <p className={`AnswerButtonStyles Yes ${(correctAnswer === "Yes") ? "" : "Red"}`}>
                                            <span>Yes</span>
                                        </p>
                                        <p className={`AnswerButtonStyles No ${(correctAnswer === "No") ? "" : "Red"}`}>
                                            <span>No</span>
                                        </p>
                                    </React.Fragment>
                                }
                            </React.Fragment>
                        }
                    </div>
                }
                {(questionType === "Degrees") &&
                    <div className="AnswerOptionsStyles">
                        <div className="AnswerButtonStyles Yes">
                            <span>Left</span>
                        </div>
                        <div className="AnswerButtonStyles No">
                            <span>Right</span>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default AnswerForm;