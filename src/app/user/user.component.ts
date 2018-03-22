import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { User } from '../data/formData.model';

import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    title = 'Today';
    user: User;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.user = this.formDataService.getUser();

        if(this.user.birthday === null)
            this.user.birthday = new Date();

    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setUser(this.user);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the details page
            this.router.navigate(['/details']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    }
}