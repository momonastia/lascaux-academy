import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactDetails } from '../models/contact.module';

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
     phoneNumber: ["", Validators.required],
     phonePrefix: ["", Validators.required],
     gender: ["M", Validators.required],
     email: ["", [Validators.required, Validators.email]],
     birthDate: ["1996-07-12", Validators.required],
     drivingLicence: [false, Validators.requiredTrue],
    })
  }


  saveForm(form: ContactDetails): void {
    console.log("ContactDetails", form)
  }
}
