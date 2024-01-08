import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as AOS from 'aos';

AOS.init();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


