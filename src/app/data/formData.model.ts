import { NullAstVisitor } from "@angular/compiler";

export class FormData {
    accepted: boolean = false;
    applicationName: string = '';
    appType: string = '';
    trackingNumber : string = '';
    highSchoolAttendanceArea: string = '';
    birthday: Date = null;
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    

    clear() {
        this.accepted = false;
        this.applicationName = '';
        this.appType = '';
        this.trackingNumber = '';
        this.highSchoolAttendanceArea = '';
        this.birthday = null;
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Start {
    accepted: boolean = false;
    applicationName: string = ''
}

export class Details {
    highSchoolAttendanceArea: string = '';
    appType: string = '';
    trackingNumber: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class User {
    birthday: Date = null;
}