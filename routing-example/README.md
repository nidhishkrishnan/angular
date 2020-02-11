[**Working Demo**](https://stackblitz.com/edit/github-routing-example)

# RoutingExample


### Routing function
```javascript
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:id/view', component: PlayersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
```

### Calling routerLink inline
```html
<a [routerLink]= "['/players', 6, 'view']" 
   [queryParams]="{id:125, name:'Manu'}" 
   [fragment]="'testing123'">
   View players
</a>
```

### Calling navigation from angular typescript function
```html
http://localhost:4200/players/9/view?id=444&name=Jacob#testing
```
```html
<a href="javascript:void(0)" 
   (click)="viewPlayers(9)">
   View players (Script)
</a>
```
```javascript
constructor(private router: Router) { }
viewPlayers(id): void {
  this.router.navigate(['/players', id, 'view'], {queryParams: {id: 444, name: 'Jacob'}, fragment: 'testing'});
}
```



` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
