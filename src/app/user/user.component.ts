import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';

import { type User } from './user.model';

// interface User
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface User

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter(); // Angular old way of doing it
  // select = output<string>() // Angular 16 way of doing it

  // avatar = input<string>()
  // avatar = input.required()
  // name = input.required()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar()
  // })
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
