import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-infp',
  templateUrl: './user-infp.component.html',
  styleUrls: ['./user-infp.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserInfpComponent {
  name = 'John Doe';
  email = 'john.doe@example.com';

  updateName() {
    this.name = 'Jane Smith';
  }

  log(){
    console.log('user infp')
  }
}
