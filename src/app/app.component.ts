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
      `microbus`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/microbus.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `minivan`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/minivan.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `pick-up`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/pick-up.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `sedan`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/sedan.svg")
    );  this.matIconRegistry.addSvgIcon(
      `sportive`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/sportive.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `suv`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/suv.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `volante`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icones/svg/volante.svg")
    );
    
  }
}
