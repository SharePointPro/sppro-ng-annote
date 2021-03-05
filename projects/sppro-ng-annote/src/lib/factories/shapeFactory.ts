import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import Konva from 'konva';

const TEXT_AREA_ID = "konva-text-editor";

export default {
    CreateLine(x: number, y: number, color: string): Konva.Line {
        return new Konva.Line({
            stroke: color,
            strokeWidth: 2,
            // globalCompositeOperation:
            //   this.mode === 'brush' ? 'source-over' : 'destination-out',
            points: [x, y],
            draggable: true
        });
    },
    CreateRectange(x: number, y: number, color: string): Konva.Rect {
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
    CreateCircle(x: number, y: number, color: string): Konva.Circle {
        return new Konva.Circle({
            stroke: color,
            strokeWidth: 2,
            x: x,
            y: y,
            radius: 0,
            draggable: true
        });
    },
    CreateArrow(x: number, y: number, color: string): Konva.Arrow {
        return new Konva.Arrow({
            stroke: color,
            strokeWidth: 2,
            points: [x, y],
            draggable: true
        });
    },
    CreateText(x: number, y: number, color: string, fontFamily: string, text: string): Konva.Text {
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

}
