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
```html
http://localhost:4200/dashboard
http://localhost:4200/players
```

```html
<li [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">
  <a routerLink="/dashboard">Dashboard</a>
</li>

<li [routerLinkActiveOptions]="{ exact: false }" routerLinkActive="active">
  <a [routerLink]="['/players']">Players</a>
</li>
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
  this.router.navigate(['/players', id, 'view'], 
                       {
                          queryParams: {id: 444, name: 'Jacob'}, 
                          fragment: 'testing'
                       });
}
```

### When we want to merge the query params

```javascript
this.router.navigate(['players', 90, 'view'], 
                     {
                        queryParamsHandling: 'merge', 
                        queryParams: {place: 'Berlin', name: 'Sachin'}
                     });
```

### Retrieving Query Parameters (queryParams, fragment, path-params)

```javascript
constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams); // for getting the queryParams values
    console.log(this.route.snapshot.fragment); // for getting the fragment values

    const id = +this.route.snapshot.params['id']; // converting string to number
    console.log('id: ', id);

    this.route.queryParams.subscribe(
      (params: Params) => {
        console.log('changed queryParams :', params);
      }
    );

    this.route.fragment.subscribe(
      (fragment: string) => {
        console.log('changed fragment :', fragment);
      }
    );

    this.route.params.subscribe(
      (pathParams: Params) => {
        console.log('changed path params :', pathParams);
      }
    );
  }
```

### Setting up child routes

```javascript
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:id/view', component: PlayersComponent },
];

TO

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'players', children: [
      {
        path: '',
        component: PlayersComponent
      },
      {
        path: ':id/view',
        component: PlayersComponent
      }
    ]
  }
];
```
