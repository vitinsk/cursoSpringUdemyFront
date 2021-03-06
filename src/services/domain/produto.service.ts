import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoDTO } from '../../models/produto.dto';

 @Injectable()
export class ProdutoService {
   constructor(public http: HttpClient) {
  }

  findById(produto_id : string) {
    return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produto/${produto_id}`);
  }

   findByCategoria(categoria_id : string) {
    return this.http.get(`${API_CONFIG.baseUrl}/produto/page?categoria=${categoria_id}`);
  }
}