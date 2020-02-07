import React from 'react'

function Home(props) {
    return (
        <div className="rectangle">
            <h1 className="title">Frequently Asked Questions</h1>
            
            <div className = "que">
            <h3 id="mess1">{props.mess1}</h3> <h3 id="plus">+</h3>
            </div>
            <div className = "que">
            <h3 id="mess2">{props.mess2}</h3> <h3 id="plus">+</h3>
            </div>
            <div className = "que">
            <h3 id="mess3">{props.mess3}</h3> <h3 id="plus">+</h3>
            </div>
            <div className = "que">
            <h3 id="mess4">{props.mess4}</h3> <h3 id="plus">+</h3>
            </div>
            <div className = "que">
            <h3 id="mess5">{props.mess5}</h3> <h3 id="plus">+</h3>
            </div>
            <div className = "que">
            <h3 id="mess6">{props.mess6}</h3> <h3 id="plus">+</h3>
            </div>

            <div className="redbtn">
                <h3 className="try">TRY 30 DAYS FREE  ></h3>
            </div>
            
        </div>
    )
}
export default Home