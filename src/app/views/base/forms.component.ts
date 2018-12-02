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

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [12, 9, 5, 13, 11, 3, 5], label: 'ibuprofen' },
    { data: [3, 6, 13, 14, 7, 5, 8], label: 'acetaminophen' }
  ];

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
