/**
 * This file was generated from CountUp.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";
import { Big } from "big.js";

export interface CountUpContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    startValue?: DynamicValue<Big>;
    endValue: DynamicValue<Big>;
    durationValue: number;
    delayValue: number;
    separator: string;
    prefix: string;
    suffix: string;
}

export interface CountUpPreviewProps {
    class: string;
    style: string;
    startValue: string;
    endValue: string;
    durationValue: number | null;
    delayValue: number | null;
    separator: string;
    prefix: string;
    suffix: string;
}
