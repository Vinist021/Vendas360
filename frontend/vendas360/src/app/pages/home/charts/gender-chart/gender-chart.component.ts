import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.css']
})
export class GenderChartComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const genderCtx = document.getElementById('genderChart') as HTMLCanvasElement;
    new Chart(genderCtx, {
      type: 'doughnut',
      data: {
        labels: ['Masculino', 'Feminino', 'Outros'],
        datasets: [{
          data: [65, 30, 5],
          backgroundColor: [
            'rgba(37, 99, 235, 0.7)',
            'rgba(236, 72, 153, 0.7)',
            'rgba(16, 185, 129, 0.7)'
          ],
          borderColor: [
            'rgba(37, 99, 235, 1)',
            'rgba(236, 72, 153, 1)',
            'rgba(16, 185, 129, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          }
        }
      }
    });
  }
}