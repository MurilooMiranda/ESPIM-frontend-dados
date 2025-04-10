import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { NgxChartsModule } from "@swimlane/ngx-charts"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  onDateRangeChange(event: { startDate: Date | null, endDate: Date | null }) {
    console.log('Data inicial:', event.startDate);
    console.log('Data final:', event.endDate);
  }
}
