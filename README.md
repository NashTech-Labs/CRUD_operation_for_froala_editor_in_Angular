# ProgressBar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## To install froala editor

https://www.npmjs.com/package/angular-froala-wysiwyg


## Include imports in app.module.ts

import { FroalaEditorModule, FroalaViewModule } from ‘angular-froala-wysiwyg’;

imports: [

FroalaEditorModule.forRoot(),

FroalaViewModule.forRoot()

]

## Add this in your angular.json

"styles": [

"styles.css",

"./node_modules/froala-editor/css/froala_editor.pkgd.min.css",

"./node_modules/froala-editor/css/froala_style.min.css",

]


## The div where you need the Froala editor just add like below

<div class="editor">
  <div  [froalaEditor] [(froalaModel)]="htmlContent"></div>
</div>


## Get the Froala editor text using two way binding

<div class="editor-text">
<h3>Froala Editor Text</h3>
<div [innerHtml]="htmlContent"></div>
</div>
