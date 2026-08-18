import { ValidatorFn } from "@angular/forms";

export interface FormConfig {
    name: string;
    lable: string;
    isHidden: boolean;
    placeholder: string;
    type: string;
    option: any[];
    validatorFun: any[];
    initialValue:  string;
    width: string;
} 