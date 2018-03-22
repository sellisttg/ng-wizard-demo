import { Component, OnInit, Input }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks for listening!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private formDataService: FormDataService, private router: Router) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        alert('Nice! Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['/start']);
    }
}
