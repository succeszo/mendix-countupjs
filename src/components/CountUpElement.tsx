import { Component, ReactNode, createElement } from "react";
import CountUp from "react-countup";

export interface InputProps {
    startValue: number;
    endValue: number;
    durationValue: number;
}

export class CountUpElement extends Component<InputProps> {
    render(): ReactNode {
        return <CountUp 
            end={this.props.endValue} 
            start={this.props.startValue ? this.props.endValue : 0} 
            duration={this.props.durationValue} />;
    }
}