import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PhoneElementModule } from './phone.module';

enableProdMode();

platformBrowserDynamic()
   .bootstrapModule(PhoneElementModule)
   .catch(err => console.error(err));
