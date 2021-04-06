import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSave, faBan, faUndo, faSquareFull, faPencilAlt, faSquare, faCircle, faLongArrowAltRight, faFont } from '@fortawesome/free-solid-svg-icons';
import { DrawableEnum } from '../enums/drawableEnum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@fortawesome/angular-fontawesome';
import * as ɵngcc3 from 'ngx-color/photoshop';

function ToolbarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelementStart(1, "color-photoshop", 7);
    ɵngcc0.ɵɵlistener("onAccept", function ToolbarComponent_div_21_Template_color_photoshop_onAccept_1_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onAccept(); })("onCancel", function ToolbarComponent_div_21_Template_color_photoshop_onCancel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onColorPicked($event); })("onChangeComplete", function ToolbarComponent_div_21_Template_color_photoshop_onChangeComplete_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onColorChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r0.color);
} }
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
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["sppro-toolbar"]], inputs: { drawableType: "drawableType", color: "color" }, outputs: { drawableTypeChange: "drawableTypeChange", colorChange: "colorChange", onUndo: "onUndo", onClear: "onClear", onSave: "onSave" }, decls: 31, vars: 17, consts: [[1, "toolbar", "sppro-toolbar"], [1, "toolbarTable"], [3, "ngClass", "click"], [3, "icon"], [1, "toolButton", 3, "click"], ["class", "color-picker-wrapper", 4, "ngIf"], [1, "color-picker-wrapper"], [1, "color-picker", 3, "color", "onAccept", "onCancel", "onChangeComplete"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "table", 1);
        ɵngcc0.ɵɵelementStart(2, "tbody");
        ɵngcc0.ɵɵelementStart(3, "tr");
        ɵngcc0.ɵɵelementStart(4, "td", 2);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_4_listener() { return ctx.onDrawableChange(ctx.DrawableEnum.FreePathDrawable); });
        ɵngcc0.ɵɵelement(5, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "tr");
        ɵngcc0.ɵɵelementStart(7, "td", 2);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_7_listener() { return ctx.onDrawableChange(ctx.DrawableEnum.SquareDrawable); });
        ɵngcc0.ɵɵelement(8, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "tr");
        ɵngcc0.ɵɵelementStart(10, "td", 2);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_10_listener() { return ctx.onDrawableChange(ctx.DrawableEnum.CircleDrawable); });
        ɵngcc0.ɵɵelement(11, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "tr");
        ɵngcc0.ɵɵelementStart(13, "td", 2);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_13_listener() { return ctx.onDrawableChange(ctx.DrawableEnum.ArrowDrawable); });
        ɵngcc0.ɵɵelement(14, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "tr");
        ɵngcc0.ɵɵelementStart(16, "td", 2);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_16_listener() { return ctx.onDrawableChange(ctx.DrawableEnum.TextDrawable); });
        ɵngcc0.ɵɵelement(17, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "tr");
        ɵngcc0.ɵɵelementStart(19, "td", 4);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_19_listener() { return ctx.showColor(); });
        ɵngcc0.ɵɵelement(20, "fa-icon", 3);
        ɵngcc0.ɵɵtemplate(21, ToolbarComponent_div_21_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "tr");
        ɵngcc0.ɵɵelementStart(23, "td", 4);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_23_listener() { return ctx.onUndo.emit(); });
        ɵngcc0.ɵɵelement(24, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "tr");
        ɵngcc0.ɵɵelementStart(26, "td", 4);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_26_listener() { return ctx.onClear.emit(); });
        ɵngcc0.ɵɵelement(27, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "tr");
        ɵngcc0.ɵɵelementStart(29, "td", 4);
        ɵngcc0.ɵɵlistener("click", function ToolbarComponent_Template_td_click_29_listener() { return ctx.onSave.emit(); });
        ɵngcc0.ɵɵelement(30, "fa-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ctx.getClass(ctx.DrawableEnum.FreePathDrawable));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.faPencilAlt);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.getClass(ctx.DrawableEnum.SquareDrawable));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.faSquare);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.getClass(ctx.DrawableEnum.CircleDrawable));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.faCircle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.getClass(ctx.DrawableEnum.ArrowDrawable));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.faLongArrowAltRight);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ctx.getClass(ctx.DrawableEnum.TextDrawable));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.faFont);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵstyleProp("color", ctx.color);
        ɵngcc0.ɵɵproperty("icon", ctx.faSquareFull);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showColorPicker);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("icon", ctx.faUndo);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("icon", ctx.faBan);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("icon", ctx.faSave);
    } }, directives: [ɵngcc1.NgClass, ɵngcc2.FaIconComponent, ɵngcc1.NgIf, ɵngcc3.PhotoshopComponent], styles: [".toolbar[_ngcontent-%COMP%]{position:fixed;left:0;width:50px;bottom:0;top:0;border:1px solid #888;background:#333;border-radius:5px}.toolButton[_ngcontent-%COMP%]{overflow:hidden;font-size:18px;width:32px;height:32px;background-color:#333;box-shadow:0 0 2px #66a;padding:1px;margin:0;cursor:pointer;color:#fff}.toolbarTable[_ngcontent-%COMP%]{width:100%;text-align:center}.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.5)}.color-picker[_ngcontent-%COMP%], .color-picker-wrapper[_ngcontent-%COMP%]{position:absolute}.color-picker[_ngcontent-%COMP%]{top:0;left:50px}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'sppro-toolbar',
                template: "<div class=\"toolbar sppro-toolbar\">\n    <table class=\"toolbarTable\">\n\n        <tbody>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.FreePathDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.FreePathDrawable)\">\n                    <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.SquareDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.SquareDrawable)\">\n                    <fa-icon [icon]=\"faSquare\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.CircleDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.CircleDrawable)\">\n                    <fa-icon [icon]=\"faCircle\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.ArrowDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.ArrowDrawable)\">\n                    <fa-icon [icon]=\"faLongArrowAltRight\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.TextDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.TextDrawable)\">\n                    <fa-icon [icon]=\"faFont\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"showColor()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faSquareFull\" [style.color]=\"color\"></fa-icon>\n                    <div *ngIf=\"showColorPicker\" class='color-picker-wrapper'>\n                        <color-photoshop class='color-picker' [color]=\"color\" (onAccept)=\"onAccept()\" (onCancel)=\"onColorPicked($event)\" (onChangeComplete)=\"onColorChange($event)\"></color-photoshop>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onUndo.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faUndo\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onClear.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faBan\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onSave.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faSave\"></fa-icon>\n                </td>\n            </tr>\n\n\n        </tbody>\n    </table>\n</div>",
                styles: [".toolbar{position:fixed;left:0;width:50px;bottom:0;top:0;border:1px solid #888;background:#333;border-radius:5px}.toolButton{overflow:hidden;font-size:18px;width:32px;height:32px;background-color:#333;box-shadow:0 0 2px #66a;padding:1px;margin:0;cursor:pointer;color:#fff}.toolbarTable{width:100%;text-align:center}.active{background-color:rgba(0,0,0,.5)}.color-picker,.color-picker-wrapper{position:absolute}.color-picker{top:0;left:50px}"]
            }]
    }], function () { return []; }, { drawableTypeChange: [{
            type: Output
        }], colorChange: [{
            type: Output
        }], onUndo: [{
            type: Output
        }], onClear: [{
            type: Output
        }], onSave: [{
            type: Output
        }], drawableType: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NwcHJvLW5nLWFubm90ZS9zcmMvbGliL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRyxNQUFNLG1DQUFtQyxDQUFBO0FBQ3RKLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JELE1BQU0sT0FBTyxnQkFBZ0I7QUFBSSxJQTRCL0I7QUFBaUIsUUExQlAsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7QUFDakUsUUFFVyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7QUFDcEQsUUFFVyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN2QyxRQUFXLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3hDLFFBQVcsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFFeEMsUUFDRSxvQkFBZSxHQUFZLEtBQUssQ0FBQztBQUVuQyxRQUFFLE9BQU87QUFDUixRQUFDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0FBQzNCLFFBQUMsYUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNyQixRQUFDLGFBQVEsR0FBRyxRQUFRLENBQUM7QUFDckIsUUFBQyx3QkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztBQUMzQyxRQUFDLFdBQU0sR0FBRyxNQUFNLENBQUM7QUFDakIsUUFBQyxpQkFBWSxHQUFHLFlBQVksQ0FBQztBQUM3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LEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBckVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhU2F2ZSwgZmFCYW4sIGZhVW5kbywgZmFTcXVhcmVGdWxsLCBmYVBlbmNpbEFsdCwgZmFTcXVhcmUsIGZhQ2lyY2xlLCBmYUxvbmdBcnJvd0FsdFJpZ2h0LCBmYUZvbnQgIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHsgRHJhd2FibGVFbnVtIH0gZnJvbSAnLi4vZW51bXMvZHJhd2FibGVFbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3Bwcm8tdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSBkcmF3YWJsZVR5cGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdhYmxlRW51bT4oKTtcbiAgQElucHV0KCkgZHJhd2FibGVUeXBlOkRyYXdhYmxlRW51bTtcblxuICBAT3V0cHV0KCkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQElucHV0KCkgY29sb3I6c3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvblVuZG8gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25TYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgc2hvd0NvbG9yUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy9JY29uc1xuICBmYVBlbmNpbEFsdCA9IGZhUGVuY2lsQWx0O1xuICBmYVNxdWFyZSA9IGZhU3F1YXJlO1xuICBmYUNpcmNsZSA9IGZhQ2lyY2xlO1xuICBmYUxvbmdBcnJvd0FsdFJpZ2h0ID0gZmFMb25nQXJyb3dBbHRSaWdodDtcbiAgZmFGb250ID0gZmFGb250O1xuICBmYVNxdWFyZUZ1bGwgPSBmYVNxdWFyZUZ1bGw7XG4gIGZhVW5kbyA9IGZhVW5kbztcbiAgZmFCYW4gPSBmYUJhbjtcbiAgZmFTYXZlID0gZmFTYXZlO1xuXG4gIERyYXdhYmxlRW51bSA9IERyYXdhYmxlRW51bTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbkRyYXdhYmxlQ2hhbmdlKHZhbHVlOkRyYXdhYmxlRW51bSk6IHZvaWQge1xuICAgIHRoaXMuZHJhd2FibGVUeXBlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3ModmFsdWU6RHJhd2FibGVFbnVtKTogc3RyaW5nIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9vbEJ1dHRvblwiO1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5kcmF3YWJsZVR5cGUpe1xuICAgICAgY2xhc3NlcyArPSBcIiBhY3RpdmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBzaG93Q29sb3IoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93Q29sb3JQaWNrZXIgPSB0cnVlO1xuICB9XG5cbiAgb25Db2xvckNoYW5nZShldmVudCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChldmVudC5jb2xvci5oZXgpO1xuICB9XG5cbiAgb25BY2NlcHQoKTogdm9pZHtcbiAgICAvL3NldFRpbWVvdXQgaXMgaGFjayBhcyBvbkFjY2VwdCB3YXMgY2FsbGluZyBhIHN0YWxlIHN0YXRlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dDb2xvclBpY2tlciA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBcbiAgb25Db2xvclBpY2tlZChldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Db2xvckNoYW5nZShldmVudCk7XG4gIH1cbn1cbiJdfQ==