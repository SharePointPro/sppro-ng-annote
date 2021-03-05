import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Konva from 'konva';
import { DrawableEnum } from  '../enums/drawableEnum';
import shapeFactory from '../factories/shapeFactory';
import textareaFactory from '../factories/textareaFactory';

const DEFAULT_DRAWABLE_TYPE: DrawableEnum = DrawableEnum.FreePathDrawable;
const DEFAULT_FONT_FAMILY: string = 'Arial';

@Component({
  selector: 'sppro-ng-annote',
  templateUrl: './ng-annote.component.html',
  styleUrls: ['./ng-annote.component.scss']
})
export class NgAnnoteComponent implements OnInit {

  @Output() onSave = new EventEmitter<string>();

  private _drawableType: DrawableEnum = DEFAULT_DRAWABLE_TYPE;

  stage: Konva.Stage;
  layer: Konva.Layer;
  image: Konva.Image;
  isPaint: boolean = false;
  mode: string = 'brush';
  lastShape: any;
  color: string = '#000000';
  textAreaVisible: boolean = false;


  img: HTMLImageElement;

  constructor() {

  }


  get drawableType(): DrawableEnum {
    return this._drawableType;
  }

  set drawableType(value: DrawableEnum) {
    this._drawableType = value;
  }

  ngOnInit(): void {
    this.img = new Image();

    this.img.onload = () => {

      this.image = new Konva.Image({
        image: this.img,
      });

      this.initalizeStage();

      this.layer = new Konva.Layer({
      });
      this.layer.add(this.image);
      this.stage.add(this.layer);

    };

    this.img.src = "https://sharepointpro.github.io/sppro-image-annote/static/media/room.fdc5a868.jpg";
  }


  initalizeStage(): void {
    this.stage = new Konva.Stage({
      container: "stage",
      width: this.img.width,
      height: this.img.height
    });

    this.stage.on('mousedown', (e) => { this.onMouseDown(e) });
    this.stage.on('mouseup', (e) => { this.onMouseUp(e) });
    this.stage.on('mousemove', (e) => { this.onMouseMove(e) });
  }

  onMouseDown(e): void {
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
        })
      }

    }

  }

  onSaveClick(): void {
    this.onSave.emit(this.stage.toDataURL());
  }

  onClear(): void {
    while (this.layer.children.length > 1){
      this.onUndo();
    }
    this.layer.batchDraw();
  }

  onMouseUp(e): void {
    this.isPaint = false;
    this.lastShape = null;
  }

  onUndo(): void {
    if (this.layer.children.length > 1) {
      this.layer.children.splice(-1, 1);
      this.layer.batchDraw();
    }
  }

  onMouseMove(e): void {
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
