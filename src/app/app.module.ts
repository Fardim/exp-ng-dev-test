import { NoteEffects } from './state/note.effects';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { MenuComponent } from './shell/menu/menu.component';
import { ShellComponent } from './shell/shell/shell.component';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ShowAllComponent } from './show-all/show-all.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HorizontalColorPalleteComponent } from './horizontal-color-pallete/horizontal-color-pallete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducer } from './state/note.reducer';
import { NoteUpdateDialogComponent } from './note-update-dialog/note-update-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllComponent,
    ShellComponent,
    MenuComponent,
    NotFoundComponent,
    HorizontalColorPalleteComponent,
    NoteUpdateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    StoreModule.forRoot({ note: reducer }),
    EffectsModule.forRoot([NoteEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Testwork Devtools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
