import { Component, Input, Output, EventEmitter, OnInit,OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {

  inputSource:string = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('inputSource') // dafault name: changeSource
  set changeSource(newSource:string){
    this.inputSource = newSource;
    console.log('chage only inputSource: ', this.inputSource)
    // code...
  };

  @Input() inputAlt:string = '';
  @Output() loaded:EventEmitter<string> = new EventEmitter<string>();

  defaultImg:string = '../../assets/images/default.png';
  counter:number = 0;
  counterFunction: number | undefined;  // Variable para guardar la ref del proceso setInterval

  constructor() {
    // Before render
    // NO Async - once time
    console.log('constructor', 'inputSource:', this.inputSource)
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // Before render
  //   // Monitoring changes on inputs  - Much times
  //   console.log('ngOnChanges')
  //   console.log('changes: ', changes)
  // }

  ngOnInit(): void {
    console.log('ngOnInit', 'inputSource:', this.inputSource)
  }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit')
  // }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    window.clearInterval(this.counterFunction);
  }

  imgError() {
    console.log(' error')
    this.inputSource = this.defaultImg;
  }
  imgLoaded(){
    console.log('Child log: loaded')
    this.loaded.emit(this.defaultImg);
  }
}
