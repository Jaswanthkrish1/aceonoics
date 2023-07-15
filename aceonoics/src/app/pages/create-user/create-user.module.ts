import { NgModule } from '@angular/core';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  imports: [CreateUserRoutingModule],
  declarations: [CreateUserComponent],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
