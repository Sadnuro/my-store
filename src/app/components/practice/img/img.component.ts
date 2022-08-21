import { Component, Input, Output, EventEmitter, OnInit,OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() inputSource:string = '';
  @Output() loaded:EventEmitter<string> = new EventEmitter<string>();

  defaultImg:string = '../../../assets/images/default.png';
  counter:number = 0;
  counterFunction: number | undefined;  // Variable para guardar la ref del proceso setInterval

  constructor() {
    // Before render
    // NO Async - once time
    console.log('constructor', 'inputSource:', this.inputSource)
  }

  ngOnChanges() {
    // Before render
    // Monitoring changes on inputs  - Much times
    console.log('ngOnChanges', 'inputSource:', this.inputSource)
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'inputSource:', this.inputSource)
    this.counterFunction = window.setInterval(()=> {
      this.counter++
      console.log('Run counter')
    }, 1000)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

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
