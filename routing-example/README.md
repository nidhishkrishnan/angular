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
http://localhost:4200/players/6/view?id=125&name=Manu#testing123
```
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
