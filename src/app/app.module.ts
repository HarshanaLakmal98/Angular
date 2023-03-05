import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { InputComponent } from './components/input/input.component';
import { MessageComponent } from './components/message/message.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ChlidComp1Component } from './components/chlid-comp1/chlid-comp1.component';
import { EventFilteringComponent } from './components/event-filtering/event-filtering.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { Activity1Component } from './activity/activity1/activity1.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ApendPipePipe } from './custom/pipe/apend-pipe.pipe';
import { CustomPipewithArgumentPipe } from './custom/pipe/custom-pipewith-argument.pipe';
import { ServiceComponent } from './components/service/service.component';
import { Service2Component } from './components/service2/service2.component';
import { DrivenFormComponent } from './components/driven-form/driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormNestedComponent } from './components/reactive-form-nested/reactive-form-nested.component';
import { ReactiveFormArrayComponent } from './components/reactive-form-array/reactive-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    NgifComponent,
    InputComponent,
    MessageComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    AttributeBindingComponent,
    NgForComponent,
    NgSwitchComponent,
    ChlidComp1Component,
    EventFilteringComponent,
    TwoWayBindingComponent,
    NgStyleComponent,
    Activity1Component,
    PipesComponent,
    ApendPipePipe,
    CustomPipewithArgumentPipe,
    ServiceComponent,
    Service2Component,
    DrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormNestedComponent,
    ReactiveFormArrayComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
