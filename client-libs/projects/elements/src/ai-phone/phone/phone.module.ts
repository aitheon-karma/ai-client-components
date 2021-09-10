import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {PhoneModule, PhoneComponent} from '../../../../ai-phone/src/public-api';

@NgModule({
    imports: [BrowserModule, PhoneModule],
    entryComponents: [PhoneComponent],
})
export class PhoneElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, PhoneComponent, 'phone');
    }
}
