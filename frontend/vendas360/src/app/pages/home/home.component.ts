import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SellerSharedService } from 'src/app/shared/services/seller-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total$: Observable<number>;

  constructor(private sellerService: SellerSharedService) {
    this.total$ = this.sellerService.sellers$.pipe(
      map(sellers => sellers.length)
    );
  }

  ngOnInit(): void {
    this.sellerService.getSellers().subscribe();
  }

}
