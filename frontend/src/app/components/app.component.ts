import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { ActivatedRoute } from '@angular/router'; // ✅ Import ActivatedRoute

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Keep it standalone
  imports: [RouterModule], // ✅ Explicitly Import RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: ActivatedRoute) { // ✅ Inject ActivatedRoute
    console.log('ActivatedRoute is working');
  }
}
