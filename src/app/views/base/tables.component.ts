import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient';
import { PatientService } from './patient.service';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent implements OnInit {
  patients: IPatient[] = [];
  errorMessage: string;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      patients => {
        this.patients = patients;
      },
      error => (this.errorMessage = <any>error)
    );
  }

}
