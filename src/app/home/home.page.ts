import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  openWhatsapp() {
    window.open(`${environment.whatsappApiUrl}/send?phone=5522992085464&text=Olá, vi um site de informações e gostaria de obter um. Como posso fazer?`, '_blank');
  }

}
