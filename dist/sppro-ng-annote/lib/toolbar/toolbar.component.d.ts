import { EventEmitter, OnInit } from '@angular/core';
import { DrawableEnum } from '../enums/drawableEnum';
import * as ɵngcc0 from '@angular/core';
export declare class ToolbarComponent implements OnInit {
    drawableTypeChange: EventEmitter<DrawableEnum>;
    drawableType: DrawableEnum;
    colorChange: EventEmitter<string>;
    color: string;
    onUndo: EventEmitter<any>;
    onClear: EventEmitter<any>;
    onSave: EventEmitter<any>;
    showColorPicker: boolean;
    faPencilAlt: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSquare: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faLongArrowAltRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faFont: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSquareFull: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faUndo: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faBan: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSave: import("@fortawesome/fontawesome-common-types").IconDefinition;
    DrawableEnum: typeof DrawableEnum;
    constructor();
    ngOnInit(): void;
    onDrawableChange(value: DrawableEnum): void;
    getClass(value: DrawableEnum): string;
    showColor(): void;
    onColorChange(event: any): void;
    onAccept(): void;
    onColorPicked(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToolbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToolbarComponent, "sppro-toolbar", never, { "drawableType": "drawableType"; "color": "color"; }, { "drawableTypeChange": "drawableTypeChange"; "colorChange": "colorChange"; "onUndo": "onUndo"; "onClear": "onClear"; "onSave": "onSave"; }, never, never>;
}

//# sourceMappingURL=toolbar.component.d.ts.map