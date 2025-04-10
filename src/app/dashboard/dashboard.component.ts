import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgForOf } from '@angular/common';
import { ScaleType } from "@swimlane/ngx-charts";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxChartsModule,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  selectedDimension = "";
  selectedDemographic = "";
  selectedOutcome = "";

  dimensionOptions = [
    "Idade", "Autopercepção de Saúde", "Suporte Social", "Condição Crônica",
    "Medicamentos", "Internações", "Quedas", "Visão", "Audição", "Limitação Física",
    "Cognição", "Humor", "ABVD", "AIVD", "Incontinência", "Perda de Peso", "Condição Bucal"
  ];

  demographicOptions = ["Raça", "Cor", "Sexo"];
  outcomeOptions = [...this.dimensionOptions];

  dimensionData = [
    { name: "NÃO para todos os itens", value: 37 },
    { name: "SIM de 1 a 4 itens", value: 63 },
  ];
  dimensionColors = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#C96807", "#EA00FF"],
  };

  fragilityData = [
    {
      name: "Janeiro",
      series: [
        { name: "Frágil", value: 12 },
        { name: "Não-Frágil", value: 28 },
        { name: "Saudável", value: 15 }
      ]
    },
    {
      name: "Fevereiro",
      series: [
        { name: "Frágil", value: 18 },
        { name: "Não-Frágil", value: 22 },
        { name: "Saudável", value: 20 }
      ]
    }
  ];
  fragilityColors = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#FFFB09", "#51FF00", "#050FC7"],
  };

  demographicData = [
    { name: "Negro", value: 30 },
    { name: "Branco", value: 58 },
    { name: "Pardo", value: 12 },
  ];
  demographicColors = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#FF0004", "#00FFD9", "#AA00FF"],
  };

  professionalData = [
    {
      name: "Janeiro",
      series: [
        { name: "Enfermeiro", value: 15 },
        { name: "Médico", value: 25 },
        { name: "Assistente social", value: 10 }
      ]
    },
    {
      name: "Fevereiro",
      series: [
        { name: "Enfermeiro", value: 20 },
        { name: "Médico", value: 30 },
        { name: "Assistente social", value: 12 }
      ]
    }
  ];
  professionalColors = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#A300D9", "#8E8C23", "#050FC7"],
  };

  outcomeData = [
    {
      name: "Janeiro",
      series: [
        { name: "Humor", value: 6 },
        { name: "Cognição", value: 8 },
        { name: "Limitação Física", value: 5 },
        { name: "Visão", value: 7 },
        { name: "Quedas", value: 4 },
        { name: "Audição", value: 9 }
      ]
    },
    {
      name: "Fevereiro",
      series: [
        { name: "Humor", value: 7 },
        { name: "Cognição", value: 6 },
        { name: "Limitação Física", value: 6 },
        { name: "Visão", value: 5 },
        { name: "Quedas", value: 5 },
        { name: "Audição", value: 8 }
      ]
    }
  ];
  outcomeColors = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#EA00FF", "#51FF00", "#C96807", "#AA00FF", "#FF0004", "#FFFB09"],
  };
}
