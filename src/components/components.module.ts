import { NgModule } from '@angular/core';
import { AtMenuComponent } from '../components/at-menu/at-menu';
import { SidebarComponent } from './sidebar/sidebar';
@NgModule({
	declarations: [
    AtMenuComponent,
    SidebarComponent],
	imports: [],
	exports: [AtMenuComponent,
    SidebarComponent]
})
export class ComponentsModule {}
