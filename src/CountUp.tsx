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
            durationValue={this.props.durationValue ? this.props.durationValue : 0}
            separator={this.props.separator ? this.props.separator : ""}
            delay={this.props.delayValue ? this.props.delayValue : 0}
            prefix={this.props.prefix ? this.props.prefix : ""}
            suffix={this.props.suffix ? this.props.suffix : ""}
            style={this.props.style} className={this.props.class} />;
    }
}
