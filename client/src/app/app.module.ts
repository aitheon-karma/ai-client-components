import { NgModule } from '@angular/core';
import { CoreClientModule } from '@aitheon/core-client';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExamplesModule } from './examples/examples.module';
import { AppRoutingModule } from './app-routing.module';

import { ClientComponentsModule, Configuration, ConfigurationParameters } from '@aitheon/client-components';
import { TemplateModule as OrchestratorModule } from '@aitheon/orchestrator';
import { BrowserModule } from '@angular/platform-browser';

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    basePath: '.'
  };
  return new Configuration(params);
}

export function apiOrchestratorConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    basePath: `${ environment.production ? '' : environment.baseApi }/orchestrator`
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreClientModule.forRoot({
      baseApi: environment.baseApi,
      production: environment.production
    }),
    AppRoutingModule,
    ExamplesModule,
    DashboardModule,
    BrowserModule,
    ClientComponentsModule.forRoot(apiConfigFactory),
    OrchestratorModule.forRoot(apiOrchestratorConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
