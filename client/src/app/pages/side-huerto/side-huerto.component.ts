import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-side-huerto',
  templateUrl: './side-huerto.component.html',
  styleUrls: ['./side-huerto.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SideHuertoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
  verquefechasalen(){
    console.log("funciona")
  }
}
