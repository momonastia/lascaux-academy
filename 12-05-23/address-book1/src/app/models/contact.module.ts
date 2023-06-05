export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
}

export interface LanguageSkill {
  language: string;
  level: LanguageLevel
}

export enum LanguageLevel {
  A1,
  A2,
  B1,
  B2,
  C1,
  C2
 }
export interface ContactDetails extends Contact {
  gender: "M" | "F" | "N";
  phoneNumber: string;
  phonePrefix: string;
  email: string;
  birthDate: Date | string ;
  drivingLicence: boolean;
  education: Education;
  languageSkills?: LanguageSkill[]
 }

 export enum Education {
  middleLicence,
  diploma,
  degree
 }


 export interface ContactForm extends Omit<Contact, 'id'> {
  details: Omit<ContactDetails, 'id' | 'firstName' | 'lastName'>;
 }
