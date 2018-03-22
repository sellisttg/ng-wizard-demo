import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Details }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-details'
    ,templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit {
    title = 'Project Details';
    details: Details;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.details = this.formDataService.getDetails();
        console.log('Details feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setDetails(this.details);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the user page
            this.router.navigate(['/user']);
        }
    }
}
