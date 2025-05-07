import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit,OnDestroy {

  private route = inject(ActivatedRoute)
  private router = inject(Router)
  code: string | null = null;
  state: string | null = null;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.code = params.get('code');
      this.state = params.get('state');
      console.log('Code:', this.code);
      console.log('State:', this.state);
    });
    // this.router.navigate('http://')
  }

  ngOnDestroy(): void {
      alert(this.code)
  }
}
