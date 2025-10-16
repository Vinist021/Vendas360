import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { SellerSharedService } from 'src/app/shared/services/seller-shared.service';
import { Seller } from 'src/app/shared/interfaces/Seller';

Chart.register(...registerables);

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements AfterViewInit, OnDestroy {
  private chart!: Chart;
  private sellersSub!: Subscription;

  constructor(private sellerService: SellerSharedService) {}

  ngAfterViewInit(): void {
    const canvas = document.getElementById('salesChart') as HTMLCanvasElement;
    if (!canvas) return;

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Salário (R$)',
          data: [],
          backgroundColor: 'rgba(37, 99, 235, 0.7)',
          borderColor: 'rgba(37, 99, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        },
        plugins: { legend: { display: false } }
      }
    });

    this.sellerService.getSellers().subscribe();

    this.sellersSub = this.sellerService.sellers$.subscribe((sellers: Seller[]) => {
      if (sellers && this.chart) {
        this.updateChart(sellers);
      }
    });
  }

private updateChart(sellers: Seller[]) {
  
  const labels = sellers.map(s => s.name);
  const data = sellers.map(s => s.salary);

  
  const backgroundColors = sellers.map((_, index) =>
    index % 2 === 0
      ? 'rgba(37, 99, 235, 0.7)'   
      : 'rgba(16, 185, 129, 0.7)'  
  );

  const borderColors = sellers.map((_, index) =>
    index % 2 === 0
      ? 'rgba(37, 99, 235, 1)'
      : 'rgba(16, 185, 129, 1)'
  );

  this.chart.data.labels = labels;
  this.chart.data.datasets[0].data = data;
  this.chart.data.datasets[0].backgroundColor = backgroundColors;
  this.chart.data.datasets[0].borderColor = borderColors;
  this.chart.update();
}

  ngOnDestroy(): void {
    if (this.sellersSub) this.sellersSub.unsubscribe();
  }
}
