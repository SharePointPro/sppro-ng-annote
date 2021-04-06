(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@fortawesome/angular-fontawesome'),require('ngx-color/photoshop'),exports, require('@angular/core'), require('konva'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('ngx-color/photoshop'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('sppro-ng-annote', ['@angular/core','@angular/common','@fortawesome/angular-fontawesome','ngx-color/photoshop','exports', '@angular/core', 'konva', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', 'ngx-color/photoshop', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.fortawesome.angularFontawesome,global.ngxColor.photoshop,global['sppro-ng-annote'] = {}, global.ng.core, global.Konva, global.freeSolidSvgIcons, global.angularFontawesome, global.photoshop, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, Konva, freeSolidSvgIcons, angularFontawesome, photoshop, common) { 
function ToolbarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelementStart(1, "color-photoshop", 7);
    ɵngcc0.ɵɵlistener("onAccept", function ToolbarComponent_div_21_Template_color_photoshop_onAccept_1_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onAccept(); })("onCancel", function ToolbarComponent_div_21_Template_color_photoshop_onCancel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onColorPicked($event); })("onChangeComplete", function ToolbarComponent_div_21_Template_color_photoshop_onChangeComplete_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onColorChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r0.color);
} }
'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Konva__default = /*#__PURE__*/_interopDefaultLegacy(Konva);

    var DrawableEnum;
    (function (DrawableEnum) {
        DrawableEnum[DrawableEnum["FreePathDrawable"] = 0] = "FreePathDrawable";
        DrawableEnum[DrawableEnum["SquareDrawable"] = 1] = "SquareDrawable";
        DrawableEnum[DrawableEnum["CircleDrawable"] = 2] = "CircleDrawable";
        DrawableEnum[DrawableEnum["ArrowDrawable"] = 3] = "ArrowDrawable";
        DrawableEnum[DrawableEnum["TextDrawable"] = 4] = "TextDrawable";
    })(DrawableEnum || (DrawableEnum = {}));

    var TEXT_AREA_ID$1 = "konva-text-editor";
    var shapeFactory = {
        CreateLine: function (x, y, color) {
            return new Konva__default['default'].Line({
                stroke: color,
                strokeWidth: 2,
                // globalCompositeOperation:
                //   this.mode === 'brush' ? 'source-over' : 'destination-out',
                points: [x, y],
                draggable: true
            });
        },
        CreateRectange: function (x, y, color) {
            return new Konva__default['default'].Rect({
                stroke: color,
                strokeWidth: 2,
                x: x,
                y: y,
                width: 0,
                height: 0,
                draggable: true
            });
        },
        CreateCircle: function (x, y, color) {
            return new Konva__default['default'].Circle({
                stroke: color,
                strokeWidth: 2,
                x: x,
                y: y,
                radius: 0,
                draggable: true
            });
        },
        CreateArrow: function (x, y, color) {
            return new Konva__default['default'].Arrow({
                stroke: color,
                strokeWidth: 2,
                points: [x, y],
                draggable: true
            });
        },
        CreateText: function (x, y, color, fontFamily, text) {
            return new Konva__default['default'].Text({
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

    var TEXT_AREA_ID = "konva-text-editor";
    var textareaFactory = {
        createTextArea: function (x, y, color, fontFamily, onBlur) {
            var textarea = getTextArea();
            styleTextarea(textarea, x, y, color, fontFamily);
            setupEvents(textarea, onBlur);
            //Auto focus after creation
            setTimeout(function () {
                textarea.focus();
            }, (100));
        }
    };
    var getTextArea = function () {
        var textarea = document.getElementById(TEXT_AREA_ID);
        if (!textarea) {
            textarea = document.createElement('textarea');
            var canvas = document.getElementsByClassName("konvajs-content")[0];
            canvas.appendChild(textarea);
            textarea.style.position = 'absolute';
            textarea.id = TEXT_AREA_ID;
        }
        return textarea;
    };
    var ɵ0 = getTextArea;
    var styleTextarea = function (textarea, x, y, color, fontFamily) {
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
    var ɵ1 = styleTextarea;
    var setupEvents = function (textarea, onBlur) {
        textarea.addEventListener('input', function (e) {
            autoExpand(e.target);
        });
        textarea.addEventListener('blur', function (e) {
            removeTextarea();
            onBlur(e);
        });
    };
    var ɵ2 = setupEvents;
    var removeTextarea = function () {
        var elem = document.getElementById(TEXT_AREA_ID);
        if (elem != null) {
            elem.parentNode.removeChild(elem);
        }
    };
    var ɵ3 = removeTextarea;
    var autoExpand = function (field) {
        // Calculate the height
        var height = field.scrollHeight;
        var width = field.scrollWidth;
        field.style.width = width + 'px';
        field.style.height = height + 'px';
    };
    var ɵ4 = autoExpand;

    var DEFAULT_DRAWABLE_TYPE = DrawableEnum.FreePathDrawable;
    var DEFAULT_FONT_FAMILY = 'Arial';
    var NgAnnoteComponent = /** @class */ (function () {
        function NgAnnoteComponent() {
            this.onSave = new core.EventEmitter();
            this._drawableType = DEFAULT_DRAWABLE_TYPE;
            this.isPaint = false;
            this.mode = 'brush';
            this.color = '#000000';
            this.textAreaVisible = false;
        }
        Object.defineProperty(NgAnnoteComponent.prototype, "drawableType", {
            get: function () {
                return this._drawableType;
            },
            set: function (value) {
                this._drawableType = value;
            },
            enumerable: false,
            configurable: true
        });
        NgAnnoteComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.img = new Image();
            this.img.onload = function () {
                _this.image = new Konva__default['default'].Image({
                    image: _this.img,
                });
                _this.initalizeStage();
                _this.layer = new Konva__default['default'].Layer({});
                _this.layer.add(_this.image);
                _this.stage.add(_this.layer);
            };
            this.img.src = "https://sharepointpro.github.io/sppro-image-annote/static/media/room.fdc5a868.jpg";
        };
        NgAnnoteComponent.prototype.initalizeStage = function () {
            var _this = this;
            this.stage = new Konva__default['default'].Stage({
                container: "stage",
                width: this.img.width,
                height: this.img.height
            });
            this.stage.on('mousedown', function (e) { _this.onMouseDown(e); });
            this.stage.on('mouseup', function (e) { _this.onMouseUp(e); });
            this.stage.on('mousemove', function (e) { _this.onMouseMove(e); });
        };
        NgAnnoteComponent.prototype.onMouseDown = function (e) {
            var _this = this;
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
                    textareaFactory.createTextArea(pos.x, pos.y, this.color, DEFAULT_FONT_FAMILY, function (element) {
                        if (element.target.value !== "") {
                            _this.lastShape = shapeFactory.CreateText(pos.x, pos.y, _this.color, DEFAULT_FONT_FAMILY, element.target.value);
                            _this.layer.add(_this.lastShape);
                            _this.layer.batchDraw();
                            _this.textAreaVisible = false;
                        }
                    });
                }
            }
        };
        NgAnnoteComponent.prototype.onSaveClick = function () {
            this.onSave.emit(this.stage.toDataURL());
        };
        NgAnnoteComponent.prototype.onClear = function () {
            while (this.layer.children.length > 1) {
                this.onUndo();
            }
            this.layer.batchDraw();
        };
        NgAnnoteComponent.prototype.onMouseUp = function (e) {
            this.isPaint = false;
            this.lastShape = null;
        };
        NgAnnoteComponent.prototype.onUndo = function () {
            if (this.layer.children.length > 1) {
                this.layer.children.splice(-1, 1);
                this.layer.batchDraw();
            }
        };
        NgAnnoteComponent.prototype.onMouseMove = function (e) {
            if (!this.isPaint || !this.lastShape || this.lastShape === DrawableEnum.TextDrawable) {
                return;
            }
            var pos = this.stage.getPointerPosition();
            if (this.drawableType === DrawableEnum.FreePathDrawable) {
                var newPoints = this.lastShape.points().concat([pos.x, pos.y]);
                this.lastShape.points(newPoints);
            }
            if (this.drawableType === DrawableEnum.SquareDrawable) {
                var dx = -(this.lastShape.attrs.x - pos.x);
                var dy = -(this.lastShape.attrs.y - pos.y);
                this.lastShape.attrs.width = dx;
                this.lastShape.attrs.height = dy;
            }
            if (this.drawableType === DrawableEnum.CircleDrawable) {
                var dx = this.lastShape.attrs.x - pos.x;
                var dy = this.lastShape.attrs.y - pos.y;
                var radius = Math.sqrt(dx * dx + dy * dy);
                this.lastShape.attrs.radius = radius;
            }
            if (this.drawableType === DrawableEnum.ArrowDrawable) {
                var newPoints = [this.lastShape.attrs.points[0], this.lastShape.attrs.points[1]];
                newPoints.push(pos.x);
                newPoints.push(pos.y);
                this.lastShape.points(newPoints);
            }
            this.layer.batchDraw();
        };
NgAnnoteComponent.ɵfac = function NgAnnoteComponent_Factory(t) { return new (t || NgAnnoteComponent)(); };
NgAnnoteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgAnnoteComponent, selectors: [["sppro-ng-annote"]], outputs: { onSave: "onSave" }, decls: 4, vars: 2, consts: [[1, "overlay", "sppro-overlay"], [3, "drawableType", "color", "drawableTypeChange", "colorChange", "onUndo", "onClear", "onSave"], [1, "centeredBox"], ["id", "stage"]], template: function NgAnnoteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "sppro-toolbar", 1);
        ɵngcc0.ɵɵlistener("drawableTypeChange", function NgAnnoteComponent_Template_sppro_toolbar_drawableTypeChange_1_listener($event) { return ctx.drawableType = $event; })("colorChange", function NgAnnoteComponent_Template_sppro_toolbar_colorChange_1_listener($event) { return ctx.color = $event; })("onUndo", function NgAnnoteComponent_Template_sppro_toolbar_onUndo_1_listener() { return ctx.onUndo(); })("onClear", function NgAnnoteComponent_Template_sppro_toolbar_onClear_1_listener() { return ctx.onClear(); })("onSave", function NgAnnoteComponent_Template_sppro_toolbar_onSave_1_listener() { return ctx.onSaveClick(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("drawableType", ctx.drawableType)("color", ctx.color);
    } }, directives: function () { return [ToolbarComponent]; }, styles: [".centeredBox[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:1000}.closeButton[_ngcontent-%COMP%]{position:fixed;right:15px;top:15px;cursor:pointer}.crosshair[_ngcontent-%COMP%]{cursor:crosshair}.text[_ngcontent-%COMP%]{cursor:text}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgAnnoteComponent, [{
        type: core.Component,
        args: [{
                selector: 'sppro-ng-annote',
                template: "<div class='overlay sppro-overlay'>\r\n    <sppro-toolbar [(drawableType)]=\"drawableType\" [(color)]=\"color\" (onUndo)=\"onUndo()\" (onClear)=\"onClear()\" (onSave)=\"onSaveClick()\"></sppro-toolbar>\r\n    <div class=\"centeredBox\">\r\n        <div id=\"stage\">\r\n            \r\n        </div>\r\n    </div>\r\n\r\n</div>",
                styles: [".centeredBox{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)}.overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:1000}.closeButton{position:fixed;right:15px;top:15px;cursor:pointer}.crosshair{cursor:crosshair}.text{cursor:text}"]
            }]
    }], function () { return []; }, { onSave: [{
            type: core.Output
        }] }); })();
        return NgAnnoteComponent;
    }());
    NgAnnoteComponent.ctorParameters = function () { return []; };
    NgAnnoteComponent.propDecorators = {
        onSave: [{ type: core.Output }]
    };

    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent() {
            this.drawableTypeChange = new core.EventEmitter();
            this.colorChange = new core.EventEmitter();
            this.onUndo = new core.EventEmitter();
            this.onClear = new core.EventEmitter();
            this.onSave = new core.EventEmitter();
            this.showColorPicker = false;
            //Icons
            this.faPencilAlt = freeSolidSvgIcons.faPencilAlt;
            this.faSquare = freeSolidSvgIcons.faSquare;
            this.faCircle = freeSolidSvgIcons.faCircle;
            this.faLongArrowAltRight = freeSolidSvgIcons.faLongArrowAltRight;
            this.faFont = freeSolidSvgIcons.faFont;
            this.faSquareFull = freeSolidSvgIcons.faSquareFull;
            this.faUndo = freeSolidSvgIcons.faUndo;
            this.faBan = freeSolidSvgIcons.faBan;
            this.faSave = freeSolidSvgIcons.faSave;
            this.DrawableEnum = DrawableEnum;
        }
        ToolbarComponent.prototype.ngOnInit = function () {
        };
        ToolbarComponent.prototype.onDrawableChange = function (value) {
            this.drawableTypeChange.emit(value);
        };
        ToolbarComponent.prototype.getClass = function (value) {
            var classes = "toolButton";
            if (value === this.drawableType) {
                classes += " active";
            }
            return classes;
        };
        ToolbarComponent.prototype.showColor = function () {
            this.showColorPicker = true;
        };
        ToolbarComponent.prototype.onColorChange = function (event) {
            this.colorChange.emit(event.color.hex);
        };
        ToolbarComponent.prototype.onAccept = function () {
            var _this = this;
            //setTimeout is hack as onAccept was calling a stale state
            setTimeout(function () {
                _this.showColorPicker = false;
            });
        };
        ToolbarComponent.prototype.onColorPicked = function (event) {
            this.onColorChange(event);
        };
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToolbarComponent, [{
        type: core.Component,
        args: [{
                selector: 'sppro-toolbar',
                template: "<div class=\"toolbar sppro-toolbar\">\n    <table class=\"toolbarTable\">\n\n        <tbody>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.FreePathDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.FreePathDrawable)\">\n                    <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.SquareDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.SquareDrawable)\">\n                    <fa-icon [icon]=\"faSquare\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.CircleDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.CircleDrawable)\">\n                    <fa-icon [icon]=\"faCircle\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.ArrowDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.ArrowDrawable)\">\n                    <fa-icon [icon]=\"faLongArrowAltRight\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onDrawableChange(DrawableEnum.TextDrawable)\"\n                    [ngClass]=\"getClass(DrawableEnum.TextDrawable)\">\n                    <fa-icon [icon]=\"faFont\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"showColor()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faSquareFull\" [style.color]=\"color\"></fa-icon>\n                    <div *ngIf=\"showColorPicker\" class='color-picker-wrapper'>\n                        <color-photoshop class='color-picker' [color]=\"color\" (onAccept)=\"onAccept()\" (onCancel)=\"onColorPicked($event)\" (onChangeComplete)=\"onColorChange($event)\"></color-photoshop>\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onUndo.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faUndo\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onClear.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faBan\"></fa-icon>\n                </td>\n            </tr>\n            <tr>\n                <td (click)=\"onSave.emit()\" class=\"toolButton\">\n                    <fa-icon [icon]=\"faSave\"></fa-icon>\n                </td>\n            </tr>\n\n\n        </tbody>\n    </table>\n</div>",
                styles: [".toolbar{position:fixed;left:0;width:50px;bottom:0;top:0;border:1px solid #888;background:#333;border-radius:5px}.toolButton{overflow:hidden;font-size:18px;width:32px;height:32px;background-color:#333;box-shadow:0 0 2px #66a;padding:1px;margin:0;cursor:pointer;color:#fff}.toolbarTable{width:100%;text-align:center}.active{background-color:rgba(0,0,0,.5)}.color-picker,.color-picker-wrapper{position:absolute}.color-picker{top:0;left:50px}"]
            }]
    }], function () { return []; }, { drawableTypeChange: [{
            type: core.Output
        }], colorChange: [{
            type: core.Output
        }], onUndo: [{
            type: core.Output
        }], onClear: [{
            type: core.Output
        }], onSave: [{
            type: core.Output
        }], drawableType: [{
            type: core.Input
        }], color: [{
            type: core.Input
        }] }); })();
        return ToolbarComponent;
    }());
    ToolbarComponent.ctorParameters = function () { return []; };
    ToolbarComponent.propDecorators = {
        drawableTypeChange: [{ type: core.Output }],
        drawableType: [{ type: core.Input }],
        colorChange: [{ type: core.Output }],
        color: [{ type: core.Input }],
        onUndo: [{ type: core.Output }],
        onClear: [{ type: core.Output }],
        onSave: [{ type: core.Output }]
    };

    var SpproNgAnnoteModule = /** @class */ (function () {
        function SpproNgAnnoteModule() {
        }
SpproNgAnnoteModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SpproNgAnnoteModule });
SpproNgAnnoteModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SpproNgAnnoteModule_Factory(t) { return new (t || SpproNgAnnoteModule)(); }, imports: [[
            angularFontawesome.FontAwesomeModule,
            photoshop.ColorPhotoshopModule,
            common.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SpproNgAnnoteModule, { declarations: [NgAnnoteComponent, ToolbarComponent], imports: [ɵngcc2.FontAwesomeModule, ɵngcc3.ColorPhotoshopModule, ɵngcc1.CommonModule], exports: [NgAnnoteComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SpproNgAnnoteModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    NgAnnoteComponent,
                    ToolbarComponent
                ],
                imports: [
                    angularFontawesome.FontAwesomeModule,
                    photoshop.ColorPhotoshopModule,
                    common.CommonModule
                ],
                exports: [NgAnnoteComponent]
            }]
    }], function () { return []; }, null); })();
        return SpproNgAnnoteModule;
    }());

    /*
     * Public API Surface of sppro-ng-annote
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgAnnoteComponent = NgAnnoteComponent;
    exports.SpproNgAnnoteModule = SpproNgAnnoteModule;
    exports.ɵa = ToolbarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sppro-ng-annote.umd.js.map