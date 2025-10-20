import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SellerSharedService } from 'src/app/shared/services/seller-shared.service';
import { Subscription } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.css']
})
export class GenderChartComponent implements AfterViewInit, OnDestroy {

  private chart!: Chart;
  private subscription!: Subscription;

  constructor(private sellerService: SellerSharedService) { }

  ngAfterViewInit(): void {
    const genderCtx = document.getElementById('genderChart') as HTMLCanvasElement;

    this.chart = new Chart(genderCtx, {
      type: 'doughnut',
      data: {
        labels: ['Feminino', 'Masculino', 'Outros'],
        datasets: [{
          data: [0, 0, 0],
          backgroundColor: [
            'rgba(236, 72, 153, 0.7)',
            'rgba(37, 99, 235, 0.7)',
            'rgba(16, 185, 129, 0.7)'
          ],
          borderColor: [
            'rgba(236, 72, 153, 1)',
            'rgba(37, 99, 235, 1)',
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

    this.subscription = this.sellerService.sellers$.subscribe(sellers => {
      const femaleCount = sellers.filter(s => s.gender === 0).length;
      const maleCount = sellers.filter(s => s.gender === 1).length;
      const otherCount = sellers.filter(s => s.gender !== 0 && s.gender !== 1).length;

      this.chart.data.datasets[0].data = [femaleCount, maleCount, otherCount];
      this.chart.update();
    });

    this.sellerService.getSellers().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
