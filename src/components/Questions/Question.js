import React from 'react';
import { Link } from 'react-router-dom';
import Options from '../Options/Options'
import Button from '../UI/Button/Button';

export const Question1 = props => {
    if (props.step !== 1) return null
    console.log(props.quesArr1)
        return props.quesArr1.map((quesOpt) => {
            let [ques, opt] = quesOpt;
            let quesNum = ques.num;
            let quesText = ques.text;
            return (
                <div>
                 {/* //show picture */}
                    <div>
                        {quesText}
                    </div>
                    <div>
                        <Options 
                            ques={quesNum} 
                            options={opt} 
                            val={props.radio}
                            //scoreClicked={props.scoreAdded} 
                            // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
                            // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
                            clicked={props.radioClick}
                        />
                    </div>
                </div>
            )
        })
}

export const Question2 = props => {
    if (props.step !== 2) return null
        return props.quesArr2.map((quesOpt) => {
            let [ques, opt] = quesOpt;
            let quesNum = ques.num;
            let quesText = ques.text;
            return (
                <div>
                 {/* //show picture */}
                    <div>
                        {quesText}
                    </div>
                    <div>
                        <Options 
                            ques={quesNum} 
                            options={opt} 
                            //scoreClicked={props.scoreAdded} 
                            // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
                            // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
                            clicked={props.radioClick}
                        />
                    </div>
                </div>
            )
        })
}

export const Question3 = props => {
    if (props.step !== 3) return null
        return props.quesArr3.map((quesOpt) => {
            let [ques, opt] = quesOpt;
            let quesNum = ques.num;
            let quesText = ques.text;
            return (
                <div>
                 {/* //show picture */}
                    <div>
                        {quesText}
                    </div>
                    <div>
                        <Options 
                            ques={quesNum} 
                            options={opt} 
                            //scoreClicked={props.scoreAdded} 
                            // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
                            // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
                            clicked={props.radioClick}
                        />
                    </div>
                    
                </div>
            )
        })
}
