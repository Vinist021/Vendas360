import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/interfaces/Seller';
import { SellerSharedService } from 'src/app/services/seller-shared.service';

@Component({
  selector: 'app-seller-table',
  templateUrl: './seller-table.component.html',
  styleUrls: ['./seller-table.component.css']
})
export class SellerTableComponent implements OnInit {

  sellers$: Observable<Seller[]>;

  constructor(private sellerService: SellerSharedService) {
    this.sellers$ = this.sellerService.sellers$;
   }

  ngOnInit(): void {
    this.sellerService.getSellers().subscribe();
  }

}
