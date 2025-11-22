import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  name: string = "Milton Gore";
  title: string = "Mr";
  subtitle: string = "Okay";
  description: string = "Hello World";
  contact: string = "11231451325";
  email: string = "milton@gmail.com";
  bio: string = "I craft digital experiences that bridge the gap between user needs and business goals. With 7 years of experience in product design, I've helped startups and Fortune 500 companies create meaningful connections with their users.";


  skills: any[] = [
    {
      title: "Product Strategy",
      icon: "bi bi-lightbulb",
      description: "User research, journey mapping, and strategic design thinking"
    },
    {
      title: "Mobile &amp; Web Design",
      icon: "bi bi-phone",
      description: "Responsive interfaces and seamless user experiences"
    },
    {
      title: "Design Systems",
      icon: "bi bi-graph-up",
      description: "Scalable component libraries and brand consistency"
    }
  ];
}
