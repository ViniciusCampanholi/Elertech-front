import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from '../../model/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  produto: Produto = new Produto
  maisVendidos:any

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(){
    // this.maisVendidos = this.getFour()
    this.get()
  }

  get(){
    this.produtoService.getAll().subscribe((data: Produto) => {
      this.maisVendidos = data
    },(error: any) => {
      console.log('Erro: ', error)
    })
  }
  // getFour(){
  //   for(let i=0 ; i<4 ; i++){
  //     this.maisVendidos = this.produto[i]
  //   }
  //   return this.maisVendidos
  // }


  //fim
}
