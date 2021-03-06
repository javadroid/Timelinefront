import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
@Output() close= new EventEmitter();
  constructor(private el:ElementRef) {
   // console.log(el.nativeElement)
   }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(): void {
   this.el.nativeElement.remove()
  }

  onCloseClick(){
this.close.emit()
  }


}
