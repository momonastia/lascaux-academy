import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Contact, ContactDetails, Education } from '../models/contact.module';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  newContact: ContactDetails

  constructor (
    private location: Location
  ) {}

  ngOnInit(): void {
    this.resetForm()
  }

  backToMainPage(): void {
    this.location.back()
  }


  saveForm(form: NgForm): void {
    /* console.log(form.value) */
    this.newContact = form.value;
    this.newContact.birthDate = new Date(form.value.birthDate)
  /*   this.newContact.education = +this.newContact.education */
    console.log(this.newContact)
    this.resetForm();
  }

  resetForm(): void {
    this.newContact = {
      phoneNumber: '',
      phonePrefix: '',
      birthDate: new Date,
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      gender: 'M',
      drivingLicence: false,
      education: Education.degree,
    }
  }
}
