import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, switchMap, take, tap } from 'rxjs/operators';
import { Seller } from '../interfaces/Seller'; 
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type NewSeller = Omit<Seller, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class SellerSharedService {

  private readonly API_URL = `${environment.apiBaseUrl}/sellers`;

  // Fonte de dados reativa
  private sellersSource = new BehaviorSubject<Seller[]>([]);
  readonly sellers$ = this.sellersSource.asObservable();

  // Estado de carregamento e erro
  private loadingSource = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSource.asObservable();

  private errorSource = new BehaviorSubject<string | null>(null);
  readonly error$ = this.errorSource.asObservable();

  // Seleção de vendedor para edição
  private selectedSellerSource = new BehaviorSubject<Seller | null>(null);
  readonly selectedSeller$ = this.selectedSellerSource.asObservable();

  constructor(private http: HttpClient) { }


  getSellers(): Observable<Seller[]> {
    this.loadingSource.next(true);
    return this.http.get<Seller[]>(this.API_URL).pipe(
      tap(sellers => {
        this.sellersSource.next(sellers);
        this.errorSource.next(null);
      }),
      catchError(err => this.handleError('Erro ao buscar vendedores', err)),
      finalize(() => this.loadingSource.next(false))
    );
  }

  getSellerById(id: number): Observable<Seller> {
    this.loadingSource.next(true);
    return this.http.get<Seller>(`${this.API_URL}/${id}`).pipe(
      catchError(err => this.handleError(`Erro ao buscar vendedor ID ${id}`, err)),
      finalize(() => this.loadingSource.next(false))
    );
  }

  addSeller(newSeller: NewSeller): Observable<Seller> {
    this.loadingSource.next(true);

    return this.sellers$.pipe(
      take(1),
      switchMap(currentList =>
        this.http.post<Seller>(this.API_URL, newSeller).pipe(
          tap(created => {
            const updated = [...currentList, created];
            this.sellersSource.next(updated);
            this.errorSource.next(null);
          }),
          catchError(err => this.handleError('Erro ao adicionar vendedor', err)),
          finalize(() => this.loadingSource.next(false))
        )
      )
    );
  }

  updateSeller(updatedSeller: Seller): Observable<Seller> {
    this.loadingSource.next(true);
    return this.http.put<Seller>(`${this.API_URL}/${updatedSeller.id}`, updatedSeller).pipe(
      tap(response => {
        const updatedList = this.sellersSource.value.map(s =>
          s.id === response.id ? response : s
        );
        this.sellersSource.next(updatedList);
        this.errorSource.next(null);
      }),
      catchError(err => this.handleError('Erro ao atualizar vendedor', err)),
      finalize(() => this.loadingSource.next(false))
    );
  }

  deleteSeller(id: number): Observable<void> {
    this.loadingSource.next(true);
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        const updatedList = this.sellersSource.value.filter(s => s.id !== id);
        this.sellersSource.next(updatedList);
        this.errorSource.next(null);
      }),
      catchError(err => this.handleError('Erro ao excluir vendedor', err)),
      finalize(() => this.loadingSource.next(false))
    );
  }

  private handleError(message: string, err: any) {
    console.error(message, err);
    this.errorSource.next(message);
    this.loadingSource.next(false);
    return throwError(() => err);
  }

  clearError() {
    this.errorSource.next(null);
  }

  selectSellerForEdit(seller: Seller) {
    this.selectedSellerSource.next(seller);
  }

  clearSelectedSeller() {
    this.selectedSellerSource.next(null);
  }
}

