import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {ChatsComponent, ChatsModule} from '../../../../ai-chat/src/public-api';

@NgModule({
    imports: [BrowserModule, ChatsModule],
    entryComponents: [ChatsComponent],
})
export class ChatElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, ChatsComponent, 'chat');
    }
}
