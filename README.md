# sppro-ng-annote
> Image Annotation in Angular

##React Version
I have also created a React version here: https://github.com/SharePointPro/sppro-image-annote

## Live Demo
Coming soon

## Install

```bash
npm install --save sppro-ng-annote
```

## Usage
```bash
//app.module.ts
import { SpproNgAnnoteModule } from 'sppro-ng-annote';

//component
<sppro-ng-annote (onSave)="onSave(b64)" ></sppro-ng-annote>  //onSave will output the base64 string
```
