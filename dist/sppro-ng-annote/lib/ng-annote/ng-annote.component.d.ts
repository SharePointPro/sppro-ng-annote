import { EventEmitter, OnInit } from '@angular/core';
import Konva from 'konva';
import { DrawableEnum } from '../enums/drawableEnum';
export declare class NgAnnoteComponent implements OnInit {
    onSave: EventEmitter<string>;
    private _drawableType;
    stage: Konva.Stage;
    layer: Konva.Layer;
    image: Konva.Image;
    isPaint: boolean;
    mode: string;
    lastShape: any;
    color: string;
    textAreaVisible: boolean;
    img: HTMLImageElement;
    constructor();
    get drawableType(): DrawableEnum;
    set drawableType(value: DrawableEnum);
    ngOnInit(): void;
    initalizeStage(): void;
    onMouseDown(e: any): void;
    onSaveClick(): void;
    onClear(): void;
    onMouseUp(e: any): void;
    onUndo(): void;
    onMouseMove(e: any): void;
}
