// Task 1
export interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [moreInfo: string]: any;
}

// Task 2
export interface Directors extends Teacher {
    numberOfReports: number;
}


// Task 3
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.slice(0, 1)}. ${lastName}`


// Task 4
export interface StudentClassInterface {
    _firstName: string;
    _lastName: string;
    workOnHomework(): string; 
    displayName(): string;
}

export interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface
}

export const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
    _firstName: string;
    _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName
    }

    workOnHomework() {return 'Currently working'};
    displayName() {return this._firstName}
}
