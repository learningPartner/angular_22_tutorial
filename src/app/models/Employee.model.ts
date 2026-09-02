import { readonly } from "@angular/forms/signals";

export interface IEmployee {
    empName ?: string;
    empId: number | string;
    isActive: boolean;
    readonly skills: string[];
    status: EmployeeStatus;
    project?: IProject;
}


export type EmployeeStatus = "In-Progress" | "Complted" | "On-Hold"

export class Employee {

    empName:string;
    empCity: string;
    isActive: boolean;
    skills: string [];
    status: EmployeeStatus;

    constructor(){
        this.empCity = '';
        this.empName = '';
        this.isActive = false;
        this.skills = []
        this.status = "On-Hold"
    }
}

export interface IProject {
    projectName: string;
    techStack: string[]
}



export interface IBasicDetais {
    name: string;
    mobile: string;
    email: string;
}

export interface IGueest extends IBasicDetais{ 
    guestValidaty: boolean;
    cardNo: string
}

export interface IAdmiUser  extends IBasicDetais{ 
    userName: string;
    pwd: string
}