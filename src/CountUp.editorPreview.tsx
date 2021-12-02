import { Component, ReactNode, createElement } from "react";
import { CountUpElement } from "./components/CountUpElement";
import { CountUpPreviewProps } from "../typings/CountUpProps";

declare function require(name: string): string;

export class preview extends Component<CountUpPreviewProps> {
    render(): ReactNode {
        const startValueNumber = Number(this.props.startValue);
        const endValueNumber = Number(this.props.endValue);
        return <CountUpElement 
            startValue={startValueNumber ? startValueNumber : 0}
            endValue={endValueNumber ? endValueNumber : 0} 
            durationValue={this.props.durationValue ? this.props.durationValue : 0} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/CountUp.css");
}
 