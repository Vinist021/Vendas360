import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Seller } from 'src/app/interfaces/Seller';
import { SellerSharedService } from 'src/app/services/seller-shared.service';


@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent {

    seller: Seller = {} as Seller;

  constructor(private sellerService: SellerSharedService) { }

    onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

     this.sellerService.addSeller(this.seller).subscribe({
      next: (createdSeller) => {
        alert(`Vendedor ${createdSeller.name} cadastrado com sucesso!`);
        form.resetForm(); 
      },
      error: (err) => {
        console.error(err);
        alert('Ocorreu um erro ao salvar o vendedor.');
      }
    });
  }

}
