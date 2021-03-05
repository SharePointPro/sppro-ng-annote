import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSave, faBan, faUndo, faSquareFull, faPencilAlt, faSquare, faCircle, faLongArrowAltRight, faFont } from '@fortawesome/free-solid-svg-icons';
import { DrawableEnum } from '../enums/drawableEnum';
export class ToolbarComponent {
    constructor() {
        this.drawableTypeChange = new EventEmitter();
        this.colorChange = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onSave = new EventEmitter();
        this.showColorPicker = false;
        //Icons
        this.faPencilAlt = faPencilAlt;
        this.faSquare = faSquare;
        this.faCircle = faCircle;
        this.faLongArrowAltRight = faLongArrowAltRight;
        this.faFont = faFont;
        this.faSquareFull = faSquareFull;
        this.faUndo = faUndo;
        this.faBan = faBan;
        this.faSave = faSave;
        this.DrawableEnum = DrawableEnum;
    }
    ngOnInit() {
    }
    onDrawableChange(value) {
        this.drawableTypeChange.emit(value);
    }
    getClass(value) {
        var classes = "toolButton";
        if (value === this.drawableType) {
            classes += " active";
        }
        return classes;
    }
    showColor() {
        this.showColorPicker = true;
    }
    onColorChange(event) {
        this.colorChange.emit(event.color.hex);
    }
    onAccept() {
        //setTimeout is hack as onAccept was calling a stale state
        setTimeout(() => {
            this.showColorPicker = false;
        });
    }
    onColorPicked(event) {
        this.onColorChange(event);
    }
}
ToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sppro-toolbar',
                template: "<div class=\"toolbar sppro-toolbar\">\n    <table class=\"toolbarTable\">\n\n        <tbody>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.FreePathDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.FreePathDrawable)\">\n                    <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.SquareDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.SquareDrawable)\">\n                    <fa-icon [icon]=\"faSquare\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.CircleDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.CircleDrawable)\">\n                    <fa-icon [icon]=\"faCircle\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.ArrowDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.ArrowDrawable)\">\n                    <fa-icon [icon]=\"faLongArrowAltRight\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.TextDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.TextDrawable)\">\n                    <fa-icon [icon]=\"faFont\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"showColor()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faSquareFull\" [style.color]=\"color\"></fa-icon>\n                    <div *ngIf=\"showColorPicker\" class='color-picker-wrapper'>\n                        <color-photoshop class='color-picker' [color]=\"color\" (onAccept)=\"onAccept()\" (onCancel)=\"onColorPicked($event)\" (onChangeComplete)=\"onColorChange($event)\"></color-photoshop>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onUndo.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faUndo\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onClear.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faBan\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onSave.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faSave\"></fa-icon>\n                </td>\n            </tr>\n\n\n        </tbody>\n    </table>\n</div>",
                styles: [".toolbar{position:fixed;left:0;width:50px;bottom:0;top:0;border:1px solid #888;background:#333;border-radius:5px}.toolButton{overflow:hidden;font-size:18px;width:32px;height:32px;background-color:#333;box-shadow:0 0 2px #66a;padding:1px;margin:0;cursor:pointer;color:#fff}.toolbarTable{width:100%;text-align:center}.active{background-color:rgba(0,0,0,.5)}.color-picker,.color-picker-wrapper{position:absolute}.color-picker{top:0;left:50px}"]
            },] }
];
ToolbarComponent.ctorParameters = () => [];
ToolbarComponent.propDecorators = {
    drawableTypeChange: [{ type: Output }],
    drawableType: [{ type: Input }],
    colorChange: [{ type: Output }],
    color: [{ type: Input }],
    onUndo: [{ type: Output }],
    onClear: [{ type: Output }],
    onSave: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zcHByby1uZy1hbm5vdGUvc3JjL2xpYi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUcsTUFBTSxtQ0FBbUMsQ0FBQTtBQUN0SixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPckQsTUFBTSxPQUFPLGdCQUFnQjtJQThCM0I7UUE1QlUsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFHdEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLE9BQU87UUFDUCxnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsd0JBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO0lBRVosQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWtCO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFrQjtRQUN6QixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBQztZQUM5QixPQUFPLElBQUksU0FBUyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLDBEQUEwRDtRQUMxRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qixra0ZBQXVDOzthQUV4Qzs7OztpQ0FHRSxNQUFNOzJCQUNOLEtBQUs7MEJBRUwsTUFBTTtvQkFDTixLQUFLO3FCQUVMLE1BQU07c0JBQ04sTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFTYXZlLCBmYUJhbiwgZmFVbmRvLCBmYVNxdWFyZUZ1bGwsIGZhUGVuY2lsQWx0LCBmYVNxdWFyZSwgZmFDaXJjbGUsIGZhTG9uZ0Fycm93QWx0UmlnaHQsIGZhRm9udCAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBEcmF3YWJsZUVudW0gfSBmcm9tICcuLi9lbnVtcy9kcmF3YWJsZUVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHByby10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIGRyYXdhYmxlVHlwZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd2FibGVFbnVtPigpO1xuICBASW5wdXQoKSBkcmF3YWJsZVR5cGU6RHJhd2FibGVFbnVtO1xuXG4gIEBPdXRwdXQoKSBjb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASW5wdXQoKSBjb2xvcjpzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uVW5kbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuXG5cbiAgc2hvd0NvbG9yUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9JY29uc1xuICBmYVBlbmNpbEFsdCA9IGZhUGVuY2lsQWx0O1xuICBmYVNxdWFyZSA9IGZhU3F1YXJlO1xuICBmYUNpcmNsZSA9IGZhQ2lyY2xlO1xuICBmYUxvbmdBcnJvd0FsdFJpZ2h0ID0gZmFMb25nQXJyb3dBbHRSaWdodDtcbiAgZmFGb250ID0gZmFGb250O1xuICBmYVNxdWFyZUZ1bGwgPSBmYVNxdWFyZUZ1bGw7XG4gIGZhVW5kbyA9IGZhVW5kbztcbiAgZmFCYW4gPSBmYUJhbjtcbiAgZmFTYXZlID0gZmFTYXZlO1xuXG4gIERyYXdhYmxlRW51bSA9IERyYXdhYmxlRW51bTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkRyYXdhYmxlQ2hhbmdlKHZhbHVlOkRyYXdhYmxlRW51bSk6IHZvaWQge1xuICAgIHRoaXMuZHJhd2FibGVUeXBlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3ModmFsdWU6RHJhd2FibGVFbnVtKTogc3RyaW5nIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9vbEJ1dHRvblwiO1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5kcmF3YWJsZVR5cGUpe1xuICAgICAgY2xhc3NlcyArPSBcIiBhY3RpdmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBzaG93Q29sb3IoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93Q29sb3JQaWNrZXIgPSB0cnVlO1xuICB9XG5cbiAgb25Db2xvckNoYW5nZShldmVudCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChldmVudC5jb2xvci5oZXgpO1xuICB9XG5cbiAgb25BY2NlcHQoKTogdm9pZHtcbiAgICAvL3NldFRpbWVvdXQgaXMgaGFjayBhcyBvbkFjY2VwdCB3YXMgY2FsbGluZyBhIHN0YWxlIHN0YXRlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dDb2xvclBpY2tlciA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBcbiAgb25Db2xvclBpY2tlZChldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Db2xvckNoYW5nZShldmVudCk7XG4gIH1cbn1cbiJdfQ==