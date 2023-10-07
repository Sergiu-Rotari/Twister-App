import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  serchTerm:string = "";
  constructor(private route:ActivatedRoute, private router:Router){ }
ngOnInit(): void{
this.route.params.subscribe(params =>{
  if(params['searchTerm'])
  this.serchTerm = params['searchTerm'] ;
})
}
search():void{
  if(this.serchTerm)
  this.router.navigateByUrl('/search/' + this.serchTerm)
}
}
