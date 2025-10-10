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
  isEditing = false;
  formTitle = 'Cadastrar Vendedor';

  constructor(private sellerService: SellerSharedService) { }

  ngOnInit(): void {
    this.sellerService.selectedSeller$.subscribe(seller => {
      if(seller) {
        this.seller = { ...seller };
        this.isEditing = true;
        this.formTitle = 'Editar Vendedor';
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Todos os campos devem ser preenchidos corretamente.');
      return;
    }

    if (this.isEditing) {
      this.sellerService.updateSeller(this.seller).subscribe({
        next: (updatedSeller) => {
          alert(`Vendedor ${updatedSeller.name} atualizado com sucesso!`);
          this.resetForm(form);
        },
        error: (err) => {
          console.error(err);
          alert('Ocorreu um erro ao atualizar o vendedor.');
        }
      });
    } else {
      this.sellerService.addSeller(this.seller).subscribe({
        next: (newSeller) => {
          alert(`Vendedor ${newSeller.name} cadastrado com sucesso!`);
          this.resetForm(form);
        },
        error: (err) => {
          console.error(err);
          alert('Ocorreu um erro ao cadastrar o vendedor.');
        }
      });
    }
  }

  editSeller(seller: Seller) {
    this.seller = { ...seller };
    this.isEditing = true;
    this.formTitle = 'Editar Vendedor';
  }

  cancelEdit(form: NgForm) {
    this.resetForm(form);
  }

  private resetForm(form: NgForm) {
    form.resetForm();
    this.seller = {} as Seller;
    this.isEditing = false;
    this.formTitle = 'Cadastrar Vendedor';
  }
}


