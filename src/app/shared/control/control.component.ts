import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
  // @HostBinding('class') className = 'control';

  // @HostListener('click') onClick() {
  //   console.log('click');
  // }

  private el = inject(ElementRef);

  onClick() {
    console.log('click');
    console.log(this.el);
  }
}
