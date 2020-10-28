import React from 'react'



const cssStyle = {};

function DateHai() {

        let date = new Date();
        var hours = date.getHours();
        var greet = ""
        if (hours < 11 ){
        greet = 'Good Morning'
        cssStyle.color = 'green'
        } else if ( hours > 12 && hours < 19) {
        greet = 'Good Evening'
        cssStyle.color = '#ffa500'
        } else if (hours > 19 && hours < 24) {
        greet = 'Good Afternoon'
        cssStyle.color = 'black'
        }

        return (<><div>
            <h1>Hello Sir, <span>{greet}</span></h1>
            </div></>)

}

export default DateHai