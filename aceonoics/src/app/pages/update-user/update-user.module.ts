import { NgModule } from '@angular/core';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { UpdateUserComponent } from './update-user.component';

@NgModule({
  imports: [UpdateUserRoutingModule],
  declarations: [UpdateUserComponent],
  exports: [UpdateUserComponent],
})
export class UpdateUserModule {}
