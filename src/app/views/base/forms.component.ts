import { Component } from '@angular/core';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Migraine',
    'Work-related stress',
    'Asthenopia'
  ];
  public polarAreaChartData: number[] = [88, 25, 37];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';

  constructor() {}

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
}
