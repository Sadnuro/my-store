import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() inputSource:string = '';
  @Output() loaded:EventEmitter<string> = new EventEmitter<string>();

  defaultImg:string = '../../../assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
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
