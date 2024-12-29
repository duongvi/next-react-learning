import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon } from "lucide-react";

export function getExperiences() {
  return [
    {
      start: new Date(2024, 5, 1),
      title: "Aspiring frontend engineer",
      tags: ["JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "HTML", "CSS"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
      url: "https://example.com",
    },
    {
      start: new Date(2019, 1, 1),
      end: new Date(2024, 5, 1),
      title: "Only backend engineer",
      tags: ["Java", "Go", "Kafka", "MongoDB", "PostgreSQL"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
      url: "https://example.com",
    },
    {
      start: new Date(2019, 1, 1),
      end: new Date(2024, 5, 1),
      title: "No engineer",
      tags: ["Java", "Go", "Kafka", "MongoDB", "PostgreSQL"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
      url: "https://example.com",
    },
    {
      start: new Date(2019, 1, 1),
      end: new Date(2024, 5, 1),
      title: "Student",
      tags: ["Java", "Go", "Kafka", "MongoDB", "PostgreSQL"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
      url: "https://example.com",
    },
  ];
}

export function getProjects() {
  return [
    {
      imageUrl: "https://http.cat/images/202.jpg",
      title: "This resume page",
      description: "This resume page that you are currently looking at is the first project that I tackled in my frontend learning journey.",
      tags: ["JavaScript", "TypeScript", "React", "HTML", "TailwindCSS", "Next.js"],
      url: "/",
    },
    {
      imageUrl: "/quote-generator.png",
      title: "Random quote generator",
      description: "My second project is a simple challenge that I saw and found interesting on freeCodeCamp. It uses a public open-source API to fetch and display random quotes.",
      tags: ["JavaScript", "TypeScript", "React", "HTML", "TailwindCSS", "Next.js"],
      url: "/quote-generator",
    },
    {
      imageUrl: "https://http.cat/images/500.jpg",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula a urna varius tincidunt. Suspendisse tincidunt in ex vulputate congue. Praesent hendrerit felis eget luctus rutrum. Curabitur venenatis varius mauris, eu rhoncus sem convallis vel.",
      tags: ["JavaScript", "TypeScript", "React", "HTML", "TailwindCSS", "Next.js"],
      url: "https://example.com",
    },
    {
      imageUrl: "https://http.cat/images/200.jpg",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula a urna varius tincidunt. Suspendisse tincidunt in ex vulputate congue. Praesent hendrerit felis eget luctus rutrum. Curabitur venenatis varius mauris, eu rhoncus sem convallis vel.",
      tags: ["JavaScript", "TypeScript", "React", "HTML", "TailwindCSS", "Next.js"],
      url: "https://example.com",
    }
  ]
}

export function getSections() {
  return [
    {
      id: "summary",
      title: "Summary",
      content: <div className="px-5 flex flex-col gap-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida risus sed justo tristique gravida.Nunc
          ac ligula sed libero imperdiet aliquam convallis et elit. Quisque vitae lorem sed tellus ultricies
          sollicitudin. Pellentesque sagittis imperdiet vestibulum. Curabitur quis leo eu sem luctus vestibulum.In
          magna turpis, iaculis et ligula non, viverra dignissim lectus. Etiam rutrum nibh at maximus lobortis. Etiam
          vulputate sapien arcu, sit amet tincidunt diam pulvinar ullamcorper.Phasellus dignissim diam tortor, a
          pellentesque massa ullamcorper nec.Suspendisse elementum laoreet sem, a semper sapien egestas sit amet.Cras
          vel consectetur quam. Praesent eget lorem lectus.
        </p>
        <p>
          Vivamus pharetra tellus ac mauris dapibus, vel pulvinar est placerat.Nam lobortis tortor congue blandit
          vestibulum.Nulla et ligula quis nisl sollicitudin lacinia ut vel elit.Cras sed mollis risus, nec tincidunt
          est.Phasellus vitae vestibulum metus, vitae ullamcorper purus.Duis bibendum quam at fringilla sagittis.Mauris
          ullamcorper aliquam augue ac vestibulum.Nunc ullamcorper leo in vulputate ultrices.Aliquam ipsum
          mauris, ornare ut scelerisque vel, interdum eget risus.Nullam sagittis est vel elit varius pharetra.Integer
          pulvinar bibendum fermentum.Proin sodales erat eget pretium accumsan.Quisque egestas gravida nulla, a
          porttitor dolor rhoncus vitae.Nullam porttitor feugiat turpis nec fermentum.
        </p>
      </div>
    },
    {
      id: 'experience',
      title: 'Experience',
      content:
        <>
          {
            getExperiences().map((experienceProps, index) => {
              return <WorkExperience key={index} {...experienceProps}/>
            })
          }
          <Link className="flex items-center group gap-2 text-lg text-white font-bold p-5 hover:text-green-500" href="https://example.com" target="_blank">
            View Full Resume
            <ArrowUpRightIcon
              className="size-5 transform transition-all group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={3}/>
          </Link>
        </>
    },
    {
      id: 'projects',
      title: 'Projects',
      content:
        <>
          {
            getProjects().map((projectProps, index) => {
              return <WorkExperience key={index} {...projectProps}/>
            })
          }
        </>
    }
  ];
}
