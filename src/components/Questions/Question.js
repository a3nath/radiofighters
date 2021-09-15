import React from 'react';
import Options from '../Options/Options'

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
                            //scoreClicked={props.scoreAdded} 
                            // quesAnsed={quesNum === 1 ? props.ques1 : props.ques2} 
                            // quesClicked={quesNum === 1 ? props.quesClicked1 : props.quesClicked2}
                            clicked={props.radioClick1}
                        />
                    </div>
                </div>
            )
        })
}

export const Question2 = props => {
    console.log(props.quesArr2)
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
                            clicked={props.radioClick2}
                        />
                    </div>
                </div>
            )
        })
}