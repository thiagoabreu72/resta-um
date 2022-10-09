import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabuleiro: FormGroup;
  posicoesTabuleiro: any[] = [];
  title = 'Resta Um';
  linha: number[] = [];
  coluna: number[] = [];
  estilo: string = '';
  //formBuild:  FormBuilder;

  constructor(private formBuild: FormBuilder) {
    this.montaLinhas();
    this.montaColunas();
    this.tabuleiro = new FormGroup({
      posicao: this.montaPosicao(),
    });

    //console.log(this.tabuleiro);
  }

  posicoesInicialJogo(posicaoLinha: number, posicaoColuna: number) {
    if (
      (posicaoLinha < 3 && posicaoColuna < 3) ||
      (posicaoLinha > 5 && posicaoColuna > 5) ||
      (posicaoLinha < 3 && posicaoColuna > 5) ||
      (posicaoLinha > 5 && posicaoColuna < 3)
    ) {
      this.estilo = 'background-color:white; border: 1px solid white;';
    } else if (posicaoLinha === 4 && posicaoColuna === 4)
      this.estilo = 'background-color:white; border: 1px solid white;';
    else this.estilo = 'background-color:black';

    return this.estilo;
  }

  geraId(posicaoLinha: number, posicaoColuna: number) {
    return `${posicaoLinha},${posicaoColuna}`;
  }

  pegaClick(valor: any) {
    console.log(valor.path[0].id);
    let dados = Object.assign({}, this.tabuleiro.value);

    dados = Object.assign(dados, {
      position: this.linha.map((v: any, i: any) => {}),
      // .filter((v) => v !== null),
    });
    console.log(dados);
  }

  montaPosicao() {
    let dados: any[] = [];
    //console.log(dados);

    dados = dados.map((valor) => {
      new FormControl(false);
    });
    return this.formBuild.array(dados);
  }

  montaLinhas() {
    for (let i = 0; i < 9; i++) {
      this.linha.push(i);
    }
  }
  montaColunas() {
    for (let i = 0; i < 9; i++) {
      this.coluna.push(i);
    }
  }

  montaJogoInicial() {
    for (let l = 0; l < this.linha.length; l++) {
      for (let c = 0; c < this.coluna.length; c++) {
        this.posicoesTabuleiro.push([{ linha: l, coluna: c }]);
      }
    }
    console.log(this.posicoesTabuleiro);
  }
}
