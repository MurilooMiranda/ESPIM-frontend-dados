import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field"; // Adicionado

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  selectedDimension = "";
  selectedDemographic = "";
  selectedOutcome = "";

  dimensionOptions = ["Idade", "Autopercepção de Saúde", "Suporte Social", "Condição Crônica", "Medicamentos", "Internações", "Quedas", "Visão", "Audição", "Limitação Física", "Cognição", "Humor", "ABVD", "AIVD", "Incontinência", "Perda de Peso", "Condição Bucal"];
  demographicOptions = ["Raça", "Cor", "Sexo"];
  outcomeOptions = ["Idade", "Autopercepção de Saúde", "Suporte Social", "Condição Crônica", "Medicamentos", "Internações", "Quedas", "Visão", "Audição", "Limitação Física", "Cognição", "Humor", "ABVD", "AIVD", "Incontinência", "Perda de Peso", "Condição Bucal"];
}
