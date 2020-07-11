import React, { Component } from 'react'
import moment from 'moment';

export class Time extends Component {

    constructor(props){
        super(props);
        this.date = props.time;
    }

    render() {
        const current_time  = moment(this.date || moment.now() ).fromNow();
        
        return (
            <span className="font-italic">{current_time}</span>
        )
    }
}

export default Time;