import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvas = document.getElementById('salesChart') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['João das Couves', 'Teste da Silva', 'Maria das Dores', 'Ana Maria', 'José Carlos'],
        datasets: [{
          label: 'Vendas (R$)',
          data: [3000, 4000, 2500, 3200, 4500],
          backgroundColor: [
            'rgba(37, 99, 235, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(37, 99, 235, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(37, 99, 235, 0.7)',
          ],
          borderColor: [
            'rgba(37, 99, 235, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(37, 99, 235, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(37, 99, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}
