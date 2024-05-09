import React,{useState} from 'react'
import styled from 'styled-components'
import '@fontsource/covered-by-your-grace'
import '@fontsource/manrope'
import Union from '../../assets/images/Union.png'
import plus from '../../assets/images/plus.png'
import minus from '../../assets/images/minus.png'

export default function HomeAskQuestions() {
    const [states,setStates]=useState(new Array(5).fill(false));

    const questions=[
        {
            id: 0,
            que: 'Do you offer freelancers?',
            ans: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
        },
        {
            id: 1,
            que: 'What’s the guarantee that I will be satisfied with the hired talent?',
            ans: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
        },
        {
            id: 2,
            que: 'Can I hire multiple talents at once?',
            ans: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
        },
        {
            id: 3,
            que: 'Why should I not go to an agency directly?',
            ans: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
        },
        {
            id: 4,
            que: 'Who can help me pick a right skillset and duration for me?',
            ans: 'If unhappy with a project, communicate with the freelancer, allow for revisions, '
        }
    ];

    const toggleState=(index) => {
        const newStates=JSON.parse(JSON.stringify(states));
        newStates[index]=!newStates[index];
        const ans=document.getElementById(`ans-${index}`);
        ans.style.gridTemplateRows=newStates[index] ? '1fr' : '0fr';
        ans.style.paddingTop=newStates[index] ? '24px' : '0px';
        setStates(newStates);
    };
  return (
    <Container>
        <main>
            <section>
                <p>What's on your mind</p>
                <p>ask questions</p>
            </section>
            <section>
                <ul>
                    {
                        questions.map((item,index) => (
                            <li key={index}>
                                <div>
                                    <span>{item.que}</span>
                                    <img src={states[index] ? minus : plus} alt="plus" height={24} width={24} onClick={() => toggleState(index)} />
                                </div>
                                <div id={`ans-${index}`}>
                                    <p>{item.ans}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <img id='union' src={Union} alt="union" width={491} height={514.61} />
        </main>
    </Container>
  )
}

const Container=styled.div`
    padding: 32px;
    main {
        border-radius: 40px;
        background-color: #E8EEE7;
        display: flex;
        position: relative;
        padding: 80px 0 0 94.5px;
        section:first-child {
            margin-right: 221.5px;
            p {
                margin: 0;
            }
            p:first-child {
                font-family: Covered by your grace;
                color: #9E9D9D;
                font-size: 32px;
                margin-bottom: 20px;
            }
            p:nth-child(2) {
                font-size: 60px;
                letter-spacing: -0.01em;
                line-height: 110%;
                color: #1C1C1C;
                font-weight: 600;
                font-family: Manrope;
                text-transform: capitalize;
            }
        }
        section:nth-child(2) {
            ul {
                list-style: none;
                padding: 0;
                margin: 57px 0 74px;
                li {
                    border-bottom: 1px solid #D7D7D7;
                    width: 581px;
                    margin-bottom: 36px;
                    div:first-child {
                        display: flex;
                        justify-content: space-between;
                        span {
                            max-width: 411px;
                            font-size: 20px;
                            font-weight: 600;
                            font-family: Manrope;
                            line-height: 140%;
                        }
                        img {
                            cursor: pointer;
                        }
                    }
                    div:nth-child(2) {
                        display: grid;
                        grid-template-rows: 0fr;
                        overflow: hidden;
                        transition: grid-template-rows 500ms;
                        p {
                            font-family: Manrope;
                            font-size: 15px;
                            line-height: 160%;
                            color: #617275;
                            margin: 0 0 24px;
                            overflow: hidden;
                        }
                    }

                }
                li:last-child {
                    margin-bottom: 0;
                }
            }
        }
        #union {
            position: absolute;
            left: 0;
            bottom: -39.61px;
        }
    }
`
