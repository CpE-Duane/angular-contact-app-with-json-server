import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
import { ActivatedRoute } from '@angular/router';
import { UpdateFormModel } from 'src/app/model/Form';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  updateForm!: FormGroup
  contactId: string = ''


  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getIdParams()
    this.getContact()

    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      img: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })
  }

  getIdParams() {
    this.route.params.subscribe(params => {
      this.contactId = params['id'];
    });
  }

  getContact() {
    this.contactService.getContact(this.contactId).subscribe((response: any) => {
      this.updateForm.patchValue(response)
    })
  }

  updateContact() {
    let payload = {
      name: this.updateForm.value.name,
      img: this.updateForm.value.img,
      email: this.updateForm.value.email,
      address: this.updateForm.value.address,
    }

    this.contactService.updateContact(this.contactId, payload).subscribe((response: any) => {
      this.router.navigate(['contacts'])
    })
  }

  back() {
    this.router.navigate(['contacts'])
  }

  get name() {
    return this.updateForm.get('name');
  }

  get img() {
    return this.updateForm.get('img');
  }

  get email() {
    return this.updateForm.get('email');
  }

  get address() {
    return this.updateForm.get('address');
  }
}
