import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reservador-frontend';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `cabrio`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/cabrio.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `coupe`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/coupe.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `hatchback`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/hatchback.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `jeep`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/jeep.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `sedan`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/sedan.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `calendar`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/calendar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `sedan`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/sedan.svg")
    ); 
    this.matIconRegistry.addSvgIcon(
      `suv`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/suv.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `volante`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/volante.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `pin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/pin.svg")
    );
    
  }
}
