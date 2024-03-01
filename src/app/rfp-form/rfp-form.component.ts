import { Component } from '@angular/core';
import { RfpService } from '../rfp.service';

@Component({
  selector: 'app-rfp-form',
  templateUrl: './rfp-form.component.html',
  styleUrls: ['./rfp-form.component.css']
})
export class RfpFormComponent {
  projectSummary: string = '';
  generatedRfp: any = null; // Holds the generated RFP data

  constructor(private rfpService: RfpService) {}

  generateRfp(): void {
    this.rfpService.generateRfp(this.projectSummary).subscribe(rfp => {
      // Store the generated RFP data so it can be displayed
      this.generatedRfp = rfp;
    }, error => {
      console.error('Error generating RFP:', error);
      // Handle any errors, potentially resetting generatedRfp or notifying the user
      this.generatedRfp = null;
    });
  }
}
