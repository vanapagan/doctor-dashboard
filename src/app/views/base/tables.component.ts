import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient';
import { PatientService } from './patient.service';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {

  patients = [
    {
      'id': '5bc3f6c14febc74b9b80a96e',
      'firstName': 'kert',
      'lastName': 'pjatkin',
      'socialSecurityNumber': '39209270263'
    },
    {
      'id': '5bc3f6ee4febc74b9b80a96f',
      'firstName': 'peeter',
      'lastName': 'meeter',
      'socialSecurityNumber': '39209270263'
    }
  ];
  errorMessage: string;

  constructor(private patientService: PatientService) { }

  /*
  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
        patients => {
            this.patients = patients;
        },
        error => this.errorMessage = <any>error
    );
  */
}

}
