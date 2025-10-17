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
  
  maxSellersPerPage = 10; 
  currentPage = 0;
  totalPages = 0;
  allSellers: Seller[] = [];
  
  get hasNextPage(): boolean {
    return this.currentPage < this.totalPages - 1;
  }
  
  get hasPreviousPage(): boolean {
    return this.currentPage > 0;
  }
  
  get currentPageInfo(): string {
    if (this.totalPages === 0) return '';
    return `Página ${this.currentPage + 1} de ${this.totalPages}`;
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5; 
    
    if (this.totalPages <= maxVisiblePages) {
      for (let i = 0; i < this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(0, this.currentPage - 2);
      const endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  }

  constructor(private sellerService: SellerSharedService) { }

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
    this.allSellers = sellers;
    
    this.totalPages = Math.ceil(sellers.length / this.maxSellersPerPage);
    
    if (this.currentPage >= this.totalPages) {
      this.currentPage = 0;
    }
    
    const startIndex = this.currentPage * this.maxSellersPerPage;
    const endIndex = startIndex + this.maxSellersPerPage;
    const currentPageSellers = sellers.slice(startIndex, endIndex);
    
    const labels = currentPageSellers.map(s => s.name);
    const data = currentPageSellers.map(s => s.salary);

    const backgroundColors = currentPageSellers.map(s => {
      switch (s.gender) {
        case 0:
          return 'rgba(236, 72, 153, 0.7)'; 
        case 1:
          return 'rgba(37, 99, 235, 0.7)'; 
        case 2:
          return 'rgba(16, 185, 129, 0.7)'; 
        default:
          return 'rgba(156, 163, 175, 0.7)'; 
      }
    });

    const borderColors = currentPageSellers.map(s => {
      switch (s.gender) {
        case 0:
          return 'rgba(236, 72, 153, 1)';
        case 1:
          return 'rgba(37, 99, 235, 1)';
        case 2:
          return 'rgba(16, 185, 129, 1)';
        default:
          return 'rgba(156, 163, 175, 1)';
      }
    });

    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = data;
    this.chart.data.datasets[0].backgroundColor = backgroundColors;
    this.chart.data.datasets[0].borderColor = borderColors;
    this.chart.update();
  }

  nextPage(): void {
    if (this.hasNextPage) {
      this.currentPage++;
      this.updateChart(this.allSellers);
    }
  }

  previousPage(): void {
    if (this.hasPreviousPage) {
      this.currentPage--;
      this.updateChart(this.allSellers);
    }
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.updateChart(this.allSellers);
    }
  }

  ngOnDestroy(): void {
    if (this.sellersSub) this.sellersSub.unsubscribe();
    if (this.chart) this.chart.destroy();
  }
}
