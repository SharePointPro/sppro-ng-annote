import { EventEmitter, Component, Output, Input, NgModule } from '@angular/core';
import Konva from 'konva';
import { faPencilAlt, faSquare, faCircle, faLongArrowAltRight, faFont, faSquareFull, faUndo, faBan, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPhotoshopModule } from 'ngx-color/photoshop';
import { CommonModule } from '@angular/common';

var DrawableEnum;
(function (DrawableEnum) {
    DrawableEnum[DrawableEnum["FreePathDrawable"] = 0] = "FreePathDrawable";
    DrawableEnum[DrawableEnum["SquareDrawable"] = 1] = "SquareDrawable";
    DrawableEnum[DrawableEnum["CircleDrawable"] = 2] = "CircleDrawable";
    DrawableEnum[DrawableEnum["ArrowDrawable"] = 3] = "ArrowDrawable";
    DrawableEnum[DrawableEnum["TextDrawable"] = 4] = "TextDrawable";
})(DrawableEnum || (DrawableEnum = {}));

const TEXT_AREA_ID$1 = "konva-text-editor";
var shapeFactory = {
    CreateLine(x, y, color) {
        return new Konva.Line({
            stroke: color,
            strokeWidth: 2,
            // globalCompositeOperation:
            //   this.mode === 'brush' ? 'source-over' : 'destination-out',
            points: [x, y],
            draggable: true
        });
    },
    CreateRectange(x, y, color) {
        return new Konva.Rect({
            stroke: color,
            strokeWidth: 2,
            x: x,
            y: y,
            width: 0,
            height: 0,
            draggable: true
        });
    },
    CreateCircle(x, y, color) {
        return new Konva.Circle({
            stroke: color,
            strokeWidth: 2,
            x: x,
            y: y,
            radius: 0,
            draggable: true
        });
    },
    CreateArrow(x, y, color) {
        return new Konva.Arrow({
            stroke: color,
            strokeWidth: 2,
            points: [x, y],
            draggable: true
        });
    },
    CreateText(x, y, color, fontFamily, text) {
        return new Konva.Text({
            stroke: color,
            strokeWidth: .1,
            x: x,
            y: y + 1,
            text: text,
            draggable: true,
            fontFamily: fontFamily,
            fontStyle: 'normal'
        });
    }
};

const TEXT_AREA_ID = "konva-text-editor";
var textareaFactory = {
    createTextArea: (x, y, color, fontFamily, onBlur) => {
        let textarea = getTextArea();
        styleTextarea(textarea, x, y, color, fontFamily);
        setupEvents(textarea, onBlur);
        //Auto focus after creation
        setTimeout(() => {
            textarea.focus();
        }, (100));
    }
};
const getTextArea = () => {
    var textarea = document.getElementById(TEXT_AREA_ID);
    if (!textarea) {
        textarea = document.createElement('textarea');
        let canvas = document.getElementsByClassName("konvajs-content")[0];
        canvas.appendChild(textarea);
        textarea.style.position = 'absolute';
        textarea.id = TEXT_AREA_ID;
    }
    return textarea;
};
const ɵ0 = getTextArea;
const styleTextarea = (textarea, x, y, color, fontFamily) => {
    textarea.style.top = y + 'px';
    textarea.style.left = x + 'px';
    textarea.style.width = "20px";
    textarea.style.height = "20px";
    textarea.style.fontSize = '12px';
    textarea.style.border = 'none';
    textarea.style.padding = '0px';
    textarea.style.margin = '0px';
    textarea.style.overflow = 'hidden';
    textarea.style.whiteSpace = 'nowrap';
    textarea.style.background = 'none';
    textarea.style.outline = 'none';
    textarea.style.resize = 'none';
    textarea.style.lineHeight = "12px";
    textarea.style.transformOrigin = 'left top';
    textarea.style.color = color;
    textarea.style.fontFamily = fontFamily;
};
const ɵ1 = styleTextarea;
const setupEvents = (textarea, onBlur) => {
    textarea.addEventListener('input', (e) => {
        autoExpand(e.target);
    });
    textarea.addEventListener('blur', (e) => {
        removeTextarea();
        onBlur(e);
    });
};
const ɵ2 = setupEvents;
const removeTextarea = () => {
    var elem = document.getElementById(TEXT_AREA_ID);
    if (elem != null) {
        elem.parentNode.removeChild(elem);
    }
};
const ɵ3 = removeTextarea;
const autoExpand = (field) => {
    // Calculate the height
    var height = field.scrollHeight;
    var width = field.scrollWidth;
    field.style.width = width + 'px';
    field.style.height = height + 'px';
};
const ɵ4 = autoExpand;

const DEFAULT_DRAWABLE_TYPE = DrawableEnum.FreePathDrawable;
const DEFAULT_FONT_FAMILY = 'Arial';
class NgAnnoteComponent {
    constructor() {
        this.onSave = new EventEmitter();
        this._drawableType = DEFAULT_DRAWABLE_TYPE;
        this.isPaint = false;
        this.mode = 'brush';
        this.color = '#000000';
        this.textAreaVisible = false;
    }
    get drawableType() {
        return this._drawableType;
    }
    set drawableType(value) {
        this._drawableType = value;
    }
    ngOnInit() {
        this.img = new Image();
        this.img.onload = () => {
            this.image = new Konva.Image({
                image: this.img,
            });
            this.initalizeStage();
            this.layer = new Konva.Layer({});
            this.layer.add(this.image);
            this.stage.add(this.layer);
        };
        this.img.src = "https://sharepointpro.github.io/sppro-image-annote/static/media/room.fdc5a868.jpg";
    }
    initalizeStage() {
        this.stage = new Konva.Stage({
            container: "stage",
            width: this.img.width,
            height: this.img.height
        });
        this.stage.on('mousedown', (e) => { this.onMouseDown(e); });
        this.stage.on('mouseup', (e) => { this.onMouseUp(e); });
        this.stage.on('mousemove', (e) => { this.onMouseMove(e); });
    }
    onMouseDown(e) {
        this.isPaint = true;
        var pos = this.stage.getPointerPosition();
        if (this.drawableType === DrawableEnum.FreePathDrawable) {
            this.lastShape = shapeFactory.CreateLine(pos.x, pos.y, this.color);
            this.layer.add(this.lastShape);
        }
        if (this.drawableType === DrawableEnum.SquareDrawable) {
            this.lastShape = shapeFactory.CreateRectange(pos.x, pos.y, this.color);
            this.layer.add(this.lastShape);
        }
        if (this.drawableType === DrawableEnum.CircleDrawable) {
            this.lastShape = shapeFactory.CreateCircle(pos.x, pos.y, this.color);
            this.layer.add(this.lastShape);
        }
        if (this.drawableType === DrawableEnum.ArrowDrawable) {
            this.lastShape = shapeFactory.CreateArrow(pos.x, pos.y, this.color);
            this.layer.add(this.lastShape);
        }
        if (this.drawableType === DrawableEnum.TextDrawable) {
            if (!this.textAreaVisible) {
                this.textAreaVisible = true;
                textareaFactory.createTextArea(pos.x, pos.y, this.color, DEFAULT_FONT_FAMILY, (element) => {
                    if (element.target.value !== "") {
                        this.lastShape = shapeFactory.CreateText(pos.x, pos.y, this.color, DEFAULT_FONT_FAMILY, element.target.value);
                        this.layer.add(this.lastShape);
                        this.layer.batchDraw();
                        this.textAreaVisible = false;
                    }
                });
            }
        }
    }
    onSaveClick() {
        this.onSave.emit(this.stage.toDataURL());
    }
    onClear() {
        while (this.layer.children.length > 1) {
            this.onUndo();
        }
        this.layer.batchDraw();
    }
    onMouseUp(e) {
        this.isPaint = false;
        this.lastShape = null;
    }
    onUndo() {
        if (this.layer.children.length > 1) {
            this.layer.children.splice(-1, 1);
            this.layer.batchDraw();
        }
    }
    onMouseMove(e) {
        if (!this.isPaint || !this.lastShape || this.lastShape === DrawableEnum.TextDrawable) {
            return;
        }
        const pos = this.stage.getPointerPosition();
        if (this.drawableType === DrawableEnum.FreePathDrawable) {
            let newPoints = this.lastShape.points().concat([pos.x, pos.y]);
            this.lastShape.points(newPoints);
        }
        if (this.drawableType === DrawableEnum.SquareDrawable) {
            const dx = -(this.lastShape.attrs.x - pos.x);
            const dy = -(this.lastShape.attrs.y - pos.y);
            this.lastShape.attrs.width = dx;
            this.lastShape.attrs.height = dy;
        }
        if (this.drawableType === DrawableEnum.CircleDrawable) {
            const dx = this.lastShape.attrs.x - pos.x;
            const dy = this.lastShape.attrs.y - pos.y;
            const radius = Math.sqrt(dx * dx + dy * dy);
            this.lastShape.attrs.radius = radius;
        }
        if (this.drawableType === DrawableEnum.ArrowDrawable) {
            let newPoints = [this.lastShape.attrs.points[0], this.lastShape.attrs.points[1]];
            newPoints.push(pos.x);
            newPoints.push(pos.y);
            this.lastShape.points(newPoints);
        }
        this.layer.batchDraw();
    }
}
NgAnnoteComponent.decorators = [
    { type: Component, args: [{
                selector: 'sppro-ng-annote',
                template: "<div class='overlay sppro-overlay'>\n    <sppro-toolbar [(drawableType)]=\"drawableType\" [(color)]=\"color\" (onUndo)=\"onUndo()\" (onClear)=\"onClear()\" (onSave)=\"onSaveClick()\"></sppro-toolbar>\n    <div class=\"centeredBox\">\n        <div id=\"stage\">\n            \n        </div>\n    </div>\n\n</div>",
                styles: [".centeredBox{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)}.overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:1000}.closeButton{position:fixed;right:15px;top:15px;cursor:pointer}.crosshair{cursor:crosshair}.text{cursor:text}"]
            },] }
];
NgAnnoteComponent.ctorParameters = () => [];
NgAnnoteComponent.propDecorators = {
    onSave: [{ type: Output }]
};

class ToolbarComponent {
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

class SpproNgAnnoteModule {
}
SpproNgAnnoteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgAnnoteComponent,
                    ToolbarComponent
                ],
                imports: [
                    FontAwesomeModule,
                    ColorPhotoshopModule,
                    CommonModule
                ],
                exports: [NgAnnoteComponent]
            },] }
];

/*
 * Public API Surface of sppro-ng-annote
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgAnnoteComponent, SpproNgAnnoteModule, ToolbarComponent as ɵa };
//# sourceMappingURL=sppro-ng-annote.js.map
