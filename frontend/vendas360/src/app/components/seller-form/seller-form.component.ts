import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/interfaces/Seller';
import { SellerSharedService } from 'src/app/services/seller-shared.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  sellerForm!: FormGroup;
  isEditing = false;
  formTitle = 'Cadastrar Vendedor';

  constructor(
    private fb: FormBuilder,
    private sellerService: SellerSharedService
  ) { }

  ngOnInit(): void {

    this.sellerForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      salary: [null, [Validators.required, Validators.min(1500)]],
      bonus: [null, Validators.required],
      gender: ['', Validators.required]
    });

    this.sellerService.selectedSeller$
      .pipe(takeUntil(this.destroy$))
      .subscribe(seller => {
        if (seller) {
          this.sellerForm.patchValue(seller);
          this.isEditing = true;
          this.formTitle = 'Editar Vendedor';
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    if (this.sellerForm.invalid) {
      this.sellerForm.markAllAsTouched();
      alert('Todos os campos devem ser preenchidos corretamente.');
      return;
    }

    const seller: Seller = this.sellerForm.value;

    if (this.isEditing) {
      this.sellerService.updateSeller(seller).subscribe({
        next: updatedSeller => {
          alert(`Vendedor ${updatedSeller.name} atualizado com sucesso!`);
          this.resetForm();
        },
        error: err => {
          console.error(err);
          alert('Ocorreu um erro ao atualizar o vendedor.');
        }
      });
    } else {
      this.sellerService.addSeller(seller).subscribe({
        next: newSeller => {
          alert(`Vendedor ${newSeller.name} cadastrado com sucesso!`);
          this.resetForm();
        },
        error: err => {
          console.error(err);
          alert('Ocorreu um erro ao cadastrar o vendedor.');
        }
      });
    }
  }

  cancelEdit() {
    this.resetForm();
  }

  private resetForm() {
    this.sellerForm.reset();
    this.isEditing = false;
    this.formTitle = 'Cadastrar Vendedor';
  }

  getFieldClass(field: string): string {
    const control = this.sellerForm.get(field);
    if (!control) return '';
    if(control.untouched) {
     return control.valid ? 'is-valid' : '';
    }
    if (control.touched) {
      return control.valid ? 'is-valid' : 'is-invalid';
    }
    return '';
  }

  get name() { return this.sellerForm.get('name'); }
  get salary() { return this.sellerForm.get('salary'); }
  get bonus() { return this.sellerForm.get('bonus'); }
  get gender() { return this.sellerForm.get('gender'); }
}