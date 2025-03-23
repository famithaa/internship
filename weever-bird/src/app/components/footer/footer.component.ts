import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule], // Import FontAwesomeModule
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // Font Awesome icons
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
}