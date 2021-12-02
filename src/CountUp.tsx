import { Component, ReactNode, createElement } from "react";
import { CountUpElement } from "./components/CountUpElement";

import { CountUpContainerProps } from "../typings/CountUpProps";

import "./ui/CountUp.css";

export default class CountUp extends Component<CountUpContainerProps> {
    render(): ReactNode {
        const startValueNumber = Number(this.props.startValue ? this.props.startValue.value : 0);
        const endValueNumber = Number(this.props.endValue.value);
        return <CountUpElement 
            startValue={startValueNumber ? startValueNumber : 0}
            endValue={endValueNumber ? endValueNumber : 0}
            durationValue={this.props.durationValue ? this.props.durationValue : 0} />;
    }
}
