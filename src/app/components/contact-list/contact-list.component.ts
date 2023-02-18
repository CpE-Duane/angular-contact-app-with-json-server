import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = []
  searchName: string = ''
  filteredContacts: any[] = [];

  constructor(
    private contactService: ContactService,
    private router: Router
    ) {

  }
  ngOnInit(): void {
    this.getAllContacts()
  }


  getAllContacts() {
   this.contactService.getAllContacts().subscribe((response: any) => {
    this.contacts = response
    this.filteredContacts = this.contacts
   })
  }

  filterContacts() {
    console.log(this.searchName)
    this.filteredContacts = this.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.searchName.toLowerCase());
    });
  }


  addContact() {
    this.router.navigate(['add-contact'])
  }

  gotoUpdate(contactId: any) {
    this.router.navigate([`update-contact/${contactId}`])
  }

  deleteContact(contactId: any) {
    this.contactService.deleteContact(contactId).subscribe((response: any) => {
      this.getAllContacts()
    })
  }



}
