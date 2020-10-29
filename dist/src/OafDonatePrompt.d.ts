import { LitElement } from 'lit-element';
declare enum GIVING_FREQUENCY {
    MONTHLY = 0,
    ONE_TIME = 1
}
export declare class OafDonatePrompt extends LitElement {
    static styles: import("lit-element").CSSResult;
    private static __monthlyButtons;
    private static __oneTimeButtons;
    selectedGivingFrequency: GIVING_FREQUENCY;
    __selectMonthly(): void;
    __selectOneTime(): void;
    render(): import("lit-element").TemplateResult;
}
export {};
