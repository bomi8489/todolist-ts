import React from "react";
import useInterval from 'use-interval';
import {
    Clock,
    ClockAmpm,
} from "../Presenter/ClockBoxPresenter";

function ClockBox() {
    const nowdate = new Date().toLocaleTimeString();

    const [time, setTime] = React.useState([nowdate]);

    useInterval(() => {
        setTime([nowdate]);
    }, 1000);

    return (
        <Clock>
            <ClockAmpm>{time}</ClockAmpm>
        </Clock>
    )
}

export default ClockBox;