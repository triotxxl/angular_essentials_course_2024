import { Component, computed, input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selctedUser = signal(DUMMY_USERS[randomIndex]);

  imagepath = computed(() => 'assets/users/' + this.selctedUser().avatar);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selctedUser.set(DUMMY_USERS[randomIndex]);
  }
}
