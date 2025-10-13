import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SellerSharedService } from 'src/app/services/seller-shared.service';

@Component({
  selector: 'app-seller-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.css']
})
export class SellerListComponent implements OnInit {

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
