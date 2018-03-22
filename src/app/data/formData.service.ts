import { Injectable }                        from '@angular/core';

import { FormData, Details, Address, Start, User }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isDetailFormValid: boolean = false;
    private isStartFormValid: boolean = false;
    private isUserFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getStart(): Start {
        var start: Start = {
            accepted: this.formData.accepted,
            applicationName: this.formData.applicationName
        }
        return start;
    }

    setStart(data: Start) {
        this.isStartFormValid = true;
        this.formData.accepted = data.accepted;
        this.formData.applicationName = data.applicationName;
        this.workflowService.validateStep(STEPS.start);
    }

    getDetails(): Details {
        // Return the Details data
        var detail: Details = {
            highSchoolAttendanceArea: this.formData.highSchoolAttendanceArea,
            appType: this.formData.appType,
            trackingNumber: this.formData.trackingNumber
        };
        return detail;
    }

    setDetails(data: Details) {
        // Update the Details data only when the Details Form had been validated successfully
        this.isDetailFormValid = true;
        this.formData.appType = data.appType;
        this.formData.highSchoolAttendanceArea = data.highSchoolAttendanceArea;
        this.formData.trackingNumber = data.trackingNumber;
        // Validate Details Step in Workflow
        this.workflowService.validateStep(STEPS.details);
    }

    getUser() : User {
        // Return the user type
        var user: User = {
            birthday: this.formData.birthday
        }
        return user;
    }
    
    setUser(data: User) {
        // Update the user type only when the user Form had been validated successfully
        this.isUserFormValid = true;
        this.formData.birthday = data.birthday;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.user);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isStartFormValid = this.isDetailFormValid = this.isUserFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isDetailFormValid &&
                this.isUserFormValid && 
                this.isAddressFormValid;
    }
}