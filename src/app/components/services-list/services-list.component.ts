import { Component, Input } from '@angular/core';
import { IServiceItem } from './service-item';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export class ServicesListComponent {
  @Input() items: IServiceItem[] = [];
  @Input() backgroundImage: string = '';
  @Input() backgroundColor: string = ''; 
  @Input() bgCard: string = '';
}
