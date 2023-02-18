import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  addForm!: FormGroup

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      img: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })

  }

  addContact() {
    let payload = {
      name: this.addForm.value.name,
      img: this.addForm.value.img,
      email: this.addForm.value.email,
      address: this.addForm.value.address,
    }
    
    this.contactService.addContact(payload).subscribe((response: any) => {
      this.router.navigate(['contacts'])
    })
  }

  back() {
    this.router.navigate(['contacts'])
  }

  get name() {
    return this.addForm.get('name');
  }

  get img() {
    return this.addForm.get('img');
  }

  get email() {
    return this.addForm.get('email');
  }

  get address() {
    return this.addForm.get('address');
  }

  

}
