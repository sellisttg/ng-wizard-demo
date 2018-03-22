import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Start }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {
  title = 'Please accept the agreement.';
  start: Start;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.start = this.formDataService.getStart();
      console.log('Start feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      this.start.accepted = true;
          
      this.formDataService.setStart(this.start);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the details page
          this.router.navigate(['/details']);
      }
  }
}
