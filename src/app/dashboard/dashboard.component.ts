import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgForOf } from '@angular/common';

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
    "Idade",
    "Autopercepção de Saúde",
    "Suporte Social",
    "Condição Crônica",
    "Medicamentos",
    "Internações",
    "Quedas",
    "Visão",
    "Audição",
    "Limitação Física",
    "Cognição",
    "Humor",
    "ABVD",
    "AIVD",
    "Incontinência",
    "Perda de Peso",
    "Condição Bucal",
  ];
  demographicOptions = ["Raça", "Cor", "Sexo"];
  outcomeOptions = [
    "Idade",
    "Autopercepção de Saúde",
    "Suporte Social",
    "Condição Crônica",
    "Medicamentos",
    "Internações",
    "Quedas",
    "Visão",
    "Audição",
    "Limitação Física",
    "Cognição",
    "Humor",
    "ABVD",
    "AIVD",
    "Incontinência",
    "Perda de Peso",
    "Condição Bucal",
  ];

  // Data for "Perfil de dimensões" (Pie Chart)
  dimensionData = [
    { name: "NÃO para todos os itens", value: 37 },
    { name: "SIM de 1 a 4 itens", value: 63 },
  ];

  // Colors for "Perfil de dimensões"
  dimensionColors = {
    domain: ["#C96807", "#EA00FF"], // Orange, Pink
  };

  // Data for "Perfil de Fragilidade" (Grouped Vertical Bar Chart)
  fragilityData = [
    {
      name: "jan",
      series: [
        { name: "Frágil", value: 50 },
        { name: "Não-Frágil", value: 20 },
        { name: "Saudável", value: 30 },
      ],
    },
    {
      name: "fev",
      series: [
        { name: "Frágil", value: 40 },
        { name: "Não-Frágil", value: 25 },
        { name: "Saudável", value: 35 },
      ],
    },
    {
      name: "mar",
      series: [
        { name: "Frágil", value: 45 },
        { name: "Não-Frágil", value: 30 },
        { name: "Saudável", value: 25 },
      ],
    },
    {
      name: "abr",
      series: [
        { name: "Frágil", value: 55 },
        { name: "Não-Frágil", value: 15 },
        { name: "Saudável", value: 30 },
      ],
    },
    {
      name: "mai",
      series: [
        { name: "Frágil", value: 50 },
        { name: "Não-Frágil", value: 20 },
        { name: "Saudável", value: 30 },
      ],
    },
  ];

  // Colors for "Perfil de Fragilidade"
  fragilityColors = {
    domain: ["#FFFB09", "#51FF00", "#050FC7"], // Yellow, Green, Dark Blue
  };

  // Data for "Perfil Sociodemográfico" (Pie Chart)
  demographicData = [
    { name: "Negro", value: 30 },
    { name: "Branco", value: 58 },
    { name: "Pardo", value: 12 },
  ];

  // Colors for "Perfil Sociodemográfico"
  demographicColors = {
    domain: ["#FF0004", "#00FFD9", "#AA00FF"], // Red, Cyan, Purple
  };

  // Data for "Profissionais que mais fizeram avaliações" (Grouped Vertical Bar Chart)
  professionalData = [
    {
      name: "jan",
      series: [
        { name: "Enfermeiro", value: 60 },
        { name: "Médico", value: 40 },
        { name: "Assistente social", value: 20 },
      ],
    },
    {
      name: "fev",
      series: [
        { name: "Enfermeiro", value: 50 },
        { name: "Médico", value: 30 },
        { name: "Assistente social", value: 25 },
      ],
    },
    {
      name: "mar",
      series: [
        { name: "Enfermeiro", value: 70 },
        { name: "Médico", value: 35 },
        { name: "Assistente social", value: 30 },
      ],
    },
    {
      name: "abr",
      series: [
        { name: "Enfermeiro", value: 65 },
        { name: "Médico", value: 45 },
        { name: "Assistente social", value: 20 },
      ],
    },
    {
      name: "mai",
      series: [
        { name: "Enfermeiro", value: 60 },
        { name: "Médico", value: 40 },
        { name: "Assistente social", value: 25 },
      ],
    },
  ];

  // Colors for "Profissionais que mais fizeram avaliações"
  professionalColors = {
    domain: ["#A300D9", "#8E8C23", "#050FC7"], // Dark Purple, Gold, Dark Blue
  };

  // Data for "Pontuação dos desfechos" (Grouped Vertical Bar Chart)
  outcomeData = [
    {
      name: "jan",
      series: [
        { name: "Humor", value: 60 },
        { name: "Cognição", value: 50 },
        { name: "Limitação Física", value: 40 },
        { name: "Visão", value: 30 },
        { name: "Quedas", value: 20 },
        { name: "Audição", value: 10 },
      ],
    },
    {
      name: "fev",
      series: [
        { name: "Humor", value: 55 },
        { name: "Cognição", value: 45 },
        { name: "Limitação Física", value: 35 },
        { name: "Visão", value: 25 },
        { name: "Quedas", value: 15 },
        { name: "Audição", value: 5 },
      ],
    },
    {
      name: "mar",
      series: [
        { name: "Humor", value: 65 },
        { name: "Cognição", value: 55 },
        { name: "Limitação Física", value: 45 },
        { name: "Visão", value: 35 },
        { name: "Quedas", value: 25 },
        { name: "Audição", value: 15 },
      ],
    },
    {
      name: "abr",
      series: [
        { name: "Humor", value: 50 },
        { name: "Cognição", value: 40 },
        { name: "Limitação Física", value: 30 },
        { name: "Visão", value: 20 },
        { name: "Quedas", value: 10 },
        { name: "Audição", value: 5 },
      ],
    },
    {
      name: "mai",
      series: [
        { name: "Humor", value: 70 },
        { name: "Cognição", value: 60 },
        { name: "Limitação Física", value: 50 },
        { name: "Visão", value: 40 },
        { name: "Quedas", value: 30 },
        { name: "Audição", value: 20 },
      ],
    },
  ];

  // Colors for "Pontuação dos desfechos"
  outcomeColors = {
    domain: ["#EA00FF", "#51FF00", "#C96807", "#AA00FF", "#FF0004", "#FFFB09"], // Pink, Green, Orange, Purple, Red, Yellow
  };
}