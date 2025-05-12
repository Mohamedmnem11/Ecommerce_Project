import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

  @Input() title='';
  @Input() data:any[]=[];

  @Output() selected=new EventEmitter();

  Changer(event: Event) {
    // const selectedValue = (event.target as HTMLSelectElement).value;
    this.selected.emit(event)

   //onsole.log(event)
   // console.log("LLLLLLLLLLLLLLLLLL")
  }

}
