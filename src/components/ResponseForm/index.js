import React from "react";
import './styles.css';

import Explosion from '../../assets/images/explosion.png';


const ResponseForm = (props) => {

    let { backgroundStyles, score, currentPage, backgroundImageUrl, rotationImageUrl, foregroundImageUrl, questionType, isCorrectAnswered, getNextPage } = props;

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
                <div className="ImageDivStyles">
                    <div className="ImageBoxStyles">
                        <img className="ImageBackgroundStyles" src={(isCorrectAnswered) ? backgroundImageUrl : Explosion} alt={`Background_Q${currentPage}`} />
                        {(questionType === "Degrees") &&
                            <img className="ImageRotateStyles" src={rotationImageUrl} alt={`Rotate_Q${currentPage}`} />
                        }
                        {(foregroundImageUrl != "") &&
                            <img className="ImageForegroundStyles" src={foregroundImageUrl} alt={`Foreground_Q${currentPage}`} />
                        }
                    </div>
                </div>
                <div className="QuestionDivStyles">{(isCorrectAnswered) ? "Great job!" : "Incorrect..."}</div>
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