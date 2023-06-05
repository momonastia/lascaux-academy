import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControlStatus, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ContactDetails, ContactForm, Education, LanguageLevel, LanguageSkill } from '../models/contact.module';
import { combineLatest, filter, interval, map, merge, take, tap } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-contact-react',
  templateUrl: './add-contact-react.component.html',
  styleUrls: ['./add-contact-react.component.css']
})
export class AddContactReactComponent implements OnInit {

  contactForm!: FormGroup
  contact: ContactDetails = {
    firstName: "Ana",
    lastName: "Tyurikova",
    birthDate: "27.09.1986",
    drivingLicence: true,
    education: Education.degree,
    email: "anastasiatyrikova@gmail.com",
    gender: "F",
    phoneNumber: "3922989762",
    phonePrefix: "+39",
    id: 1,
  }
  languageSkills: LanguageSkill[] = [
    {
      language: "Inglese",
      level: LanguageLevel.A1,
    },
    {
      language: "Spagnolo",
      level: LanguageLevel.A1,
    },
  ]

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
     firstName: ["", [Validators.required, this.upperCaseValidator()]],
     lastName: ["", Validators.required, this.upperCaseValidatorAsync()],
     details: this.formBuilder.group({
        /* languageSkills: this.formBuilder.array([
          this.formBuilder.group({
          language: "Inglese",
          level: LanguageLevel.A1,
        }
        )]), */
        languageSkills: this.formBuilder.array(
          this.languageSkills.map(langskills =>
            this.formBuilder.group(langskills)
            )
        ),
        phoneNumber: ["", Validators.required],
        phonePrefix: ["", Validators.required],
        gender: ["M", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        birthDate: ["1996-07-12", Validators.required],
        drivingLicence: [false, Validators.requiredTrue],

    })
    })

   /*  this.contactForm.get("details")!.disable() */

    /* this.contactForm.get("firstName")?.valueChanges.subscribe(console.log); */

    this.contactForm.patchValue(this.contact)
    this.contactForm.get("details")?.patchValue(this.contact)

    combineLatest([
      this.contactForm.get("firstName")!.statusChanges,
      this.contactForm.get("lastName")!.statusChanges
    ]).pipe(
      tap(console.log),
      filter(
      (s) => s.every((status: FormControlStatus) => status === "VALID")))
    .subscribe(() =>
      this.contactForm.get("details")!.enable()
    );
  }

  upperCaseValidator(): ValidatorFn {

    return (control) => {
      console.log("Validatore custom", control.value);
      control.errors

      const upperCaseError: ValidationErrors = {
        upperCase : true
      }

      if(control.value == control.value.toUpperCase()){
        return null
      } else {
        return upperCaseError
      }
    }
  }

  upperCaseValidatorAsync(): AsyncValidatorFn {

    return (control) => {
      console.log("Validatore custom", control.value);
      return interval(15000).pipe(
        take(1),
        map(_ => {
          control.errors;
          const upperCaseError: ValidationErrors = {
            asyncUpperCase : true
          }

          if(control.value == control.value.toUpperCase()){
            return null
          } else {
            return upperCaseError
          }
        })
      )


    }
  }

  saveForm(form: ContactForm): void {
    console.log("Contact Details", form)

    const {details, ...others} = form
    const newContact: ContactDetails = {
      /* firstName: form.firstName,
      lastName: form.lastName,
      birthDate: form.details.birthDate,
      drivingLicence: form.details.drivingLicence,
      education: form.details.education,
      email: form.details.email,
      gender: form.details.gender,
      id: 1,
      phoneNumber: form.details.phoneNumber,
      phonePrefix: form.details.phonePrefix,
      languageSkills: form.details.languageSkills, */

      ...others,
      ...details,
      id: 1,
    }
      console.log("newContact", newContact)
  }

  addLanguage(): void {
    const newLanguageGroup: FormGroup = this.formBuilder.group({
      language: ["", Validators.required],
      level: LanguageLevel.A1,
    });
    (this.contactForm.get("details")?.get("languageSkills") as FormArray).push(newLanguageGroup)
  }

  get languageSkill(): FormArray {
    return this.contactForm.get("details")?.get("languageSkills") as FormArray
  }

  removeLanguage(i: number): void {
    this.languageSkill.removeAt(i)
  }

  removeAllLanguages(): void {
    this.languageSkill.clear()
  }
}
