import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';
import { AbTransactions } from 'src/app/models/ab_transactions';
import { AbTransactionsService } from 'src/app/services/ab-transactions.service';
import { ChangeDetectorRef } from '@angular/core';

interface month {
  value: string;
  viewValue: string;
}

export interface salesOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

export interface yearlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

export interface monthlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

// ecommerce card



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent {
  // @ViewChild('chart') chart: ChartComponent = Object.create(null);

  // public salesOverviewChart!: Partial<salesOverviewChart> | any;
  // public yearlyChart!: Partial<yearlyChart> | any;
  // public monthlyChart!: Partial<monthlyChart> | any;

  transactions: AbTransactions[] = [];
  dataSource = "transactions"
  displayedColumns: string[] = ['code_transaction', 'lib', 'tri'];

  constructor(private abTransactionsService: AbTransactionsService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.abTransactionsService.getAbTransactions().subscribe((data) => {
      console.log('Fetched transactions:', data); // Log the fetched data
      this.transactions = data;
    });
  }
  // months: month[] = [
  //   { value: 'mar', viewValue: 'March 2023' },
  //   { value: 'apr', viewValue: 'April 2023' },
  //   { value: 'june', viewValue: 'June 2023' },
  // ];



  // ecommerce card
  

    // yearly breakup chart
  //   this.yearlyChart = {
  //     series: [38, 40, 25],

  //     chart: {
  //       type: 'donut',
  //       fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //       foreColor: '#adb0bb',
  //       toolbar: {
  //         show: false,
  //       },
  //       height: 130,
  //     },
  //     colors: ['#5D87FF', '#ECF2FF', '#F9F9FD'],
  //     plotOptions: {
  //       pie: {
  //         startAngle: 0,
  //         endAngle: 360,
  //         donut: {
  //           size: '75%',
  //           background: 'transparent',
  //         },
  //       },
  //     },
  //     stroke: {
  //       show: false,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 991,
  //         options: {
  //           chart: {
  //             width: 120,
  //           },
  //         },
  //       },
  //     ],
  //     tooltip: {
  //       enabled: false,
  //     },
  //   };

  //   // mohtly earnings chart
  //   this.monthlyChart = {
  //     series: [
  //       {
  //         name: '',
  //         color: '#49BEFF',
  //         data: [25, 66, 20, 40, 12, 58, 20],
  //       },
  //     ],

  //     chart: {
  //       type: 'area',
  //       fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //       foreColor: '#adb0bb',
  //       toolbar: {
  //         show: false,
  //       },
  //       height: 60,
  //       sparkline: {
  //         enabled: true,
  //       },
  //       group: 'sparklines',
  //     },
  //     stroke: {
  //       curve: 'smooth',
  //       width: 2,
  //     },
  //     fill: {
  //       colors: ['#E8F7FF'],
  //       type: 'solid',
  //       opacity: 0.05,
  //     },
  //     markers: {
  //       size: 0,
  //     },
  //     tooltip: {
  //       theme: 'dark',
  //       x: {
  //         show: false,
  //       },
  //     },
  //   };
  // }
}
