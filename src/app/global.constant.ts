import { Validators } from "@angular/forms";

export const GlobalConstant = {
    empList: [
        { empId: 101, name: 'Aarav Sharma', role: 'Software Engineer', department: 'Engineering', location: 'Bengaluru', mobile: '+91 98765 43210', email: 'aarav.sharma@company.com' },
        { empId: 102, name: 'Priya Nair', role: 'Product Manager', department: 'Product', location: 'Mumbai', mobile: '+91 98765 43211', email: 'priya.nair@company.com' },
        { empId: 103, name: 'Rohan Mehta', role: 'UI/UX Designer', department: 'Design', location: 'Pune', mobile: '+91 98765 43212', email: 'rohan.mehta@company.com' },
        { empId: 104, name: 'Sneha Patel', role: 'Data Analyst', department: 'Analytics', location: 'Bengaluru', mobile: '+91 98765 43213', email: 'sneha.patel@company.com' },
        { empId: 105, name: 'Vikram Joshi', role: 'DevOps Engineer', department: 'Engineering', location: 'Hyderabad', mobile: '+91 98765 43214', email: 'vikram.joshi@company.com' },
        { empId: 106, name: 'Ananya Verma', role: 'HR Manager', department: 'Human Resources', location: 'Delhi', mobile: '+91 98765 43215', email: 'ananya.verma@company.com' },
        { empId: 107, name: 'Karan Malhotra', role: 'QA Automation Lead', department: 'Quality Assurance', location: 'Pune', mobile: '+91 98765 43216', email: 'karan.malhotra@company.com' },
        { empId: 108, name: 'Neha Gupta', role: 'Content Strategist', department: 'Marketing', location: 'Mumbai', mobile: '+91 98765 43217', email: 'neha.gupta@company.com' },
        { empId: 109, name: 'Siddharth Rao', role: 'Backend Developer', department: 'Engineering', location: 'Bengaluru', mobile: '+91 98765 43218', email: 'siddharth.rao@company.com' },
        { empId: 110, name: 'Meera Iyer', role: 'Financial Analyst', department: 'Finance', location: 'Chennai', mobile: '+91 98765 43219', email: 'meera.iyer@company.com' },
        { empId: 111, name: 'Aditya Kulkarni', role: 'Frontend Developer', department: 'Engineering', location: 'Pune', mobile: '+91 98765 43220', email: 'aditya.kulkarni@company.com' },
        { empId: 112, name: 'Pooja Reddy', role: 'Scrum Master', department: 'Product', location: 'Hyderabad', mobile: '+91 98765 43221', email: 'pooja.reddy@company.com' },
        { empId: 113, name: 'Gaurav Das', role: 'Cybersecurity Specialist', department: 'IT Operations', location: 'Kolkata', mobile: '+91 98765 43222', email: 'gaurav.das@company.com' },
        { empId: 114, name: 'Rhea Sen', role: 'SEO Manager', department: 'Marketing', location: 'Delhi', mobile: '+91 98765 43223', email: 'rhea.sen@company.com' },
        { empId: 115, name: 'Tarun Bansal', role: 'System Architect', department: 'Engineering', location: 'Bengaluru', mobile: '+91 98765 43224', email: 'tarun.bansal@company.com' },
    ],

    customerFormConfig: [
        { width:'col-',name: 'userId', initialValue: 0, lable: '', isHidden: true, placeholder: '', type: 'number', option: [], validatorFun: [] },
        { width:'col-12',name: 'userName', initialValue: '', lable: 'Enter User Name', isHidden: false, placeholder: 'User Name', type: 'text', option: [], validatorFun: [Validators.required, Validators.minLength(3)] },
        { width:'col-6',name: 'userState', initialValue: '', lable: 'Select State', isHidden: false, placeholder: 'Select', type: 'select', option: ["MH", "Goa", "Punjab"], validatorFun: [Validators.required] },
        { width:'col-6',name: 'userCity', initialValue: '', lable: 'Select City', isHidden: false, placeholder: 'Select', type: 'select', option: ["Pune", "Nagpur", "Mumbai"], validatorFun: [Validators.required] },
        { width:'col-12',name: 'address', initialValue: '', lable: 'Enter Address', isHidden: false, placeholder: 'Addreess', type: 'textarea', option: [], validatorFun: [] },
        { width:'col-',name: 'isActive', initialValue: false, lable: 'Select Status', isHidden: false, placeholder: '', type: 'checkbox', option: [], validatorFun: [] },

    ],
    employeeFormConfig: [
    { width:'col-', name: 'employeeId', initialValue: 0, lable: '', isHidden: true, placeholder: '', type: 'number', option: [], validatorFun: [] },

    { width:'col-6', name: 'firstName', initialValue: '', lable: 'First Name', isHidden: false, placeholder: 'Enter First Name', type: 'text', option: [], validatorFun: [Validators.required, Validators.minLength(2)] },

    { width:'col-6', name: 'lastName', initialValue: '', lable: 'Last Name', isHidden: false, placeholder: 'Enter Last Name', type: 'text', option: [], validatorFun: [Validators.required, Validators.minLength(2)] },

    { width:'col-6', name: 'email', initialValue: '', lable: 'Email Address', isHidden: false, placeholder: 'Enter Email', type: 'email', option: [], validatorFun: [Validators.required, Validators.email] },

    { width:'col-6', name: 'mobileNo', initialValue: '', lable: 'Mobile Number', isHidden: false, placeholder: 'Enter Mobile Number', type: 'number', option: [], validatorFun: [Validators.required, Validators.pattern('^[0-9]{10}$')] },

    { width:'col-6', name: 'dateOfBirth', initialValue: '', lable: 'Date of Birth', isHidden: false, placeholder: 'Select DOB', type: 'date', option: [], validatorFun: [Validators.required] },

    { width:'col-6', name: 'dateOfJoining', initialValue: '', lable: 'Date of Joining', isHidden: false, placeholder: 'Select Joining Date', type: 'date', option: [], validatorFun: [Validators.required] },

    { width:'col-6', name: 'gender', initialValue: '', lable: 'Gender', isHidden: false, placeholder: '', type: 'radio', option: ["Male", "Female", "Other"], validatorFun: [Validators.required] },

    { width:'col-6', name: 'department', initialValue: '', lable: 'Select Department', isHidden: false, placeholder: 'Select', type: 'select', option: ["HR", "IT", "Finance", "Sales", "Operations"], validatorFun: [Validators.required] },

    { width:'col-6', name: 'designation', initialValue: '', lable: 'Select Designation', isHidden: false, placeholder: 'Select', type: 'select', option: ["Manager", "Team Lead", "Developer", "Analyst", "Intern"], validatorFun: [Validators.required] },

    { width:'col-6', name: 'employeeType', initialValue: '', lable: 'Employee Type', isHidden: false, placeholder: 'Select', type: 'select', option: ["Full-Time", "Part-Time", "Contract", "Intern"], validatorFun: [Validators.required] },

    { width:'col-6', name: 'salary', initialValue: '', lable: 'Enter Salary', isHidden: false, placeholder: 'Enter Salary', type: 'number', option: [], validatorFun: [Validators.required, Validators.min(0)] },

    { width:'col-6', name: 'skills', initialValue: [], lable: 'Select Skills', isHidden: false, placeholder: 'Select', type: 'multiselect', option: ["Angular", "React", "Node", "Java", "Python", ".NET"], validatorFun: [] },

    { width:'col-12', name: 'address', initialValue: '', lable: 'Enter Address', isHidden: false, placeholder: 'Address', type: 'textarea', option: [], validatorFun: [Validators.required] },

    { width:'col-6', name: 'password', initialValue: '', lable: 'Set Password', isHidden: false, placeholder: 'Enter Password', type: 'password', option: [], validatorFun: [Validators.required, Validators.minLength(6)] },

    { width:'col-', name: 'isActive', initialValue: true, lable: 'Select Status', isHidden: false, placeholder: '', type: 'checkbox', option: [], validatorFun: [] },
],

}

// {
//   "userId": 0,
//   "userName": "string",
//   "emailId": "string",
//   "fullName": "string",
//   "password": "string"
// }