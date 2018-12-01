import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPatient } from './patient';
import { PatientService } from './patient.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit {

  errorMessage = '';
  patient: IPatient | undefined;

  constructor(private route: ActivatedRoute,
    private patientService: PatientService) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  ngOnInit() {
    // const param = this.route.snapshot.paramMap.get('id');
    const param = '5bc3f6c14febc74b9b80a96e';
    if (param) {
      this.GetPatient(param);
    }
  }

  GetPatient(id: string) {
    this.patientService.getPatient(id).subscribe(
      patient => this.patient = patient,
      error => this.errorMessage = <any>error);
  }

}
