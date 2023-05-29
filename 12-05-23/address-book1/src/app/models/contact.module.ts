export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ContactDetails extends Contact {
  gender: "M" | "F" | "N";
  phoneNumber: string;
  phonePrefix: string;
  email: string;
  birthDate: Date | string ;
  drivingLicence: boolean;
  education: Education;
 }

 export enum Education {
  middleLicence,
  diploma,
  degree
 }
