import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactDetails } from '../models/contact.module';
import { combineLatest, filter, merge } from 'rxjs';

@Component({
  selector: 'app-add-contact-react',
  templateUrl: './add-contact-react.component.html',
  styleUrls: ['./add-contact-react.component.css']
})
export class AddContactReactComponent implements OnInit {

  contactForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
     firstName: ["Nastia", Validators.required],
     lastName: ["", Validators.required],
     details: this.formBuilder.group({

        phoneNumber: ["", Validators.required],
        phonePrefix: ["", Validators.required],
        gender: ["M", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        birthDate: ["1996-07-12", Validators.required],
        drivingLicence: [false, Validators.requiredTrue],

    })
    })

    this.contactForm.get("details")!.disable()

    /* this.contactForm.get("firstName")?.valueChanges.subscribe(console.log); */
    combineLatest([
      this.contactForm.get("firstName")!.statusChanges,
      this.contactForm.get("lastName")!.statusChanges
    ]).pipe(filter(
      (s) => s.every((status) => status === "VALID")))
    .subscribe(() =>
      this.contactForm.get("details")!.enable()
    );
  }


  saveForm(form: ContactDetails): void {
    console.log("ContactDetails", form)
  }
}
