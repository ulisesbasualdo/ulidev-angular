import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServicesListComponent } from '../../components/services-list/services-list.component';
import { serviceDataItems } from '../../constans/services-const/services-const.component';
import { IServiceItem } from '../../components/services-list/service-item';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent,ServicesListComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  public servicesItems : IServiceItem[] = serviceDataItems;
}
