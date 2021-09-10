import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChatElementModule } from './chat.module';


enableProdMode();

platformBrowserDynamic()
   .bootstrapModule(ChatElementModule)
   .catch(err => console.error(err));
