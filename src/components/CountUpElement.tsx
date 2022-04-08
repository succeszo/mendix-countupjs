import { CSSProperties, Component, ReactNode, createElement } from "react";
import CountUp from "react-countup";

export interface InputProps {
    startValue: number;
    endValue: number;
    durationValue: number;
    className?: string;
    style?: CSSProperties;
    separator?: string;
    delay?: number;
    prefix?: string;
    suffix?: string;
} 

export class CountUpElement extends Component<InputProps> {
    render(): ReactNode {
        return <CountUp
            end={this.props.endValue} 
            start={this.props.startValue ? this.props.startValue : 0} 
            duration={this.props.durationValue} 
            style={this.props.style} 
            className={this.props.className}
            separator={this.props.separator}
            delay={this.props.delay}
            prefix={this.props.prefix}
            suffix={this.props.suffix} />;
    }
}