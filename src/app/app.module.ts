import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ChlidComp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
