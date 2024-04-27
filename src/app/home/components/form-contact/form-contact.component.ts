import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent  implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.mountForm();
  }

  mountForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required,]],
      message: ['', [Validators.required]]
    });
  }

  openWhatsapp() {
    const name = this.contactForm.get('name')!.value;
    const message = this.contactForm.get('message')!.value;
    window.open(`${environment.whatsappApiUrl}/send?text=Olá, me chamo ${name}. Segue a mensagem: ${message}`, '_blank');
  }

}
