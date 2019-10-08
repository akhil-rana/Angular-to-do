import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './todo/dialog-example/dialog-example.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlreadyExistsDialogComponent } from './todo/already-exists-dialog/already-exists-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoInputComponent,
    TodoListComponent,
    DialogOverviewExampleDialog,
    AlreadyExistsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    DragDropModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatGridListModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog,AlreadyExistsDialogComponent]
})
export class AppModule { }
