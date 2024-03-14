/**
* task 1
*/
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
  }
/** task 2*/
export interface Directors extends Teacher {
  numberOfReports: number;
  }
/** task 3*/
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
/** task 4*/
export interface StudentClassConstructor {
new (firstName: string, lastName: string): StudentClassInterface;
  }
/**the interface*/
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
/**implents the interface and the constructor*/
export const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}
