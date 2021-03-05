import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSave, faBan, faUndo, faSquareFull, faPencilAlt, faSquare, faCircle, faLongArrowAltRight, faFont  } from '@fortawesome/free-solid-svg-icons'
import { DrawableEnum } from '../enums/drawableEnum';

@Component({
  selector: 'sppro-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() drawableTypeChange = new EventEmitter<DrawableEnum>();
  @Input() drawableType:DrawableEnum;

  @Output() colorChange = new EventEmitter<string>();
  @Input() color:string;

  @Output() onUndo = new EventEmitter();
  @Output() onClear = new EventEmitter();
  @Output() onSave = new EventEmitter();


  showColorPicker: boolean = false;

  //Icons
  faPencilAlt = faPencilAlt;
  faSquare = faSquare;
  faCircle = faCircle;
  faLongArrowAltRight = faLongArrowAltRight;
  faFont = faFont;
  faSquareFull = faSquareFull;
  faUndo = faUndo;
  faBan = faBan;
  faSave = faSave;

  DrawableEnum = DrawableEnum;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDrawableChange(value:DrawableEnum): void {
    this.drawableTypeChange.emit(value);
  }

  getClass(value:DrawableEnum): string {
    var classes = "toolButton";
    if (value === this.drawableType){
      classes += " active";
    }
    return classes;
  }

  showColor(): void {
    this.showColorPicker = true;
  }

  onColorChange(event): void {
    this.colorChange.emit(event.color.hex);
  }

  onAccept(): void{
    //setTimeout is hack as onAccept was calling a stale state
    setTimeout(() => {
      this.showColorPicker = false;
    });
  }


  
  onColorPicked(event): void {
    this.onColorChange(event);
  }
}
