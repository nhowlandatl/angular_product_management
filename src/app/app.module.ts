import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.components';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';

@NgModule({
  // Declarations are all the components belonging to this module
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // Bootstrap is the entry component for the app
  bootstrap: [AppComponent],
})
export class AppModule {}
