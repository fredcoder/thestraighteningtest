import React from "react";
import FadeIn from 'react-fade-in';
import './styles.css';

import Explosion from '../../assets/images/explosion.png';


const ResponseForm = (props) => {

    let { backgroundStyles, score, currentPage, backgroundImageUrl, rotationImageUrl, foregroundImageUrl, dottedImageUrl, questionType, isCorrectAnswered, getNextPage } = props;

    return (
        <React.Fragment>
            <div className={`${backgroundStyles} ${(isCorrectAnswered) ? "Confetti" : ""}`}>
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
                {(isCorrectAnswered)
                    ?
                    <React.Fragment>
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
                        <div className="QuestionDivStyles">Great job!</div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <FadeIn delay={50} transitionDuration={800}>
                            <div className="ImageDivStyles">
                                <div className="ImageBoxStyles">
                                    <img className="ImageBackgroundStyles" src={Explosion} alt={`Background_Q${currentPage}`} />
                                </div>
                            </div>
                        </FadeIn>
                        <div className="QuestionDivStyles">Incorrect..."</div>
                    </React.Fragment>
                }
                <div className="HomeButtonDivStyles">
                    <p className="HomeButtonStyles" onClick={getNextPage}>
                        <span>Next</span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ResponseForm;