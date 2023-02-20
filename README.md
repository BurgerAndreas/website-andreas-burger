# website-andreas-burger

## Initial setup

Make sure you have a recent node / npm installed.

Run  `npm i` in this directory.

Globally install the Angular CLI (v15, the latest as of writing)
`npm i -g @angular/cli`

Build the "Atoms" Library (where I'd like to put reusable code bits and pieces)
`ng build --project AtomsLib`

## Development server

Run `ng serve` for a dev server.
That will host the website at `http://localhost:4200/`.
The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project (as a standard webserver-hostable bundle).
The bundle will be stored in the `dist/` directory.

## Code scaffolding

`ng generate` generates boilerplate code and registers the respective components where applicable.
e.g. `ng generate component component-name` to generate a new component.
Applying `--help` to a (partial) command gives info


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Current TODOs

- make auto-recompile on AtomsLib change work
- make "routes to <ul> <li>" transformation work
