import Header from "@/components/header";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Mail, Github } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { EducationItem } from "@/components/portfolio/education-item";
import { SkillCategory } from "@/components/portfolio/skill-category";
import { ExperienceItem } from "@/components/portfolio/experience-item";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CertificationCard } from "@/components/portfolio/certification-card";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <Header />
        
        <section className="max-w-4xl mx-auto mt-16 mb-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
              Dhiraj Singh
            </h1>
            
            {/* Contact Links */}
            <div className="flex items-center justify-center gap-6 mt-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <Link 
                href="mailto:dhiraj.kr.singh.real@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Mail size={18} />
                <span className="font-serif">dhiraj.kr.singh.real@gmail.com</span>
              </Link>
              <Link 
                href="https://github.com/DhirajSingh"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Github size={18} />
                <span className="font-serif">github.com/DhirajSingh</span>
              </Link>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <SectionHeading title="Education" />
            
            <div className="space-y-8">
              <EducationItem 
                institution="Sister Nivedita University"
                degree="Bachelor of Technology in Computer Science Engineering"
                location="Kolkata, India"
                duration="Nov 2021 - June 2025"
                courses="Operating Systems, Data Structures, Analysis of Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases"
              />
              
              <EducationItem 
                institution="East West Model School"
                degree="Indian School Certificate (ISC), Class 12 – Science"
                location="Bardhaman"
                duration="2021"
                courses="Physics, Chemistry, Mathematics"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <SectionHeading title="Skills" />
            
            <div className="grid gap-6">
              <SkillCategory 
                title="Programming Languages"
                skills={[
                  { name: "Python", highlight: true },
                  { name: "Java", highlight: true },
                  { name: "C++", highlight: true },
                  { name: "Bash" },
                  { name: "Shell Scripting" }
                ]}
              />
              
              <SkillCategory 
                title="Web & Backend"
                skills={[
                  { name: "FastAPI", highlight: true },
                  { name: "Spring Boot", highlight: true },
                  { name: "REST APIs", highlight: true },
                  { name: "HTML" },
                  { name: "CSS" },
                  { name: "JavaScript" }
                ]}
              />
              
              <SkillCategory 
                title="Cloud & DevOps"
                skills={[
                  { name: "AWS", highlight: true },
                  { name: "GCP", highlight: true },
                  { name: "CI/CD", highlight: true },
                  { name: "Infrastructure as Code" },
                  { name: "Docker" }
                ]}
              />
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <SectionHeading title="Experience" />
            
            <div className="space-y-12">
              <ExperienceItem 
                title="DevOps Engineer"
                company="Heva AI"
                type="On-site"
                duration="Aug 2024 – Feb 2025"
                responsibilities={[
                  "Built deployment-ready infrastructure using foundational cloud concepts across AWS and GCP to support scalable project environments.",
                  "Developed automation flows for application delivery, contributing to faster releases and smoother internal testing processes.",
                  "Designed monitoring and access control mechanisms in a multi-region setup, while understanding best practices in system reliability and security."
                ]}
              />
              
              <ExperienceItem 
                title="DevOps Engineer"
                company="Freelance"
                type="Remote"
                duration="Sep 2024 – Dec 2024"
                responsibilities={[
                  "Built storage optimization workflows using cloud storage and data management features across AWS environments to reduce redundant storage and improve efficiency.",
                  "Developed budgeting and usage monitoring processes to support cost-effective architecture and resource planning for small-scale projects.",
                  "Designed cloud deployment templates for client use cases, focusing on scalability and automation within lightweight compute environments powered by AWS and GCP."
                ]}
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
            <SectionHeading title="Projects" />
            
            <div className="grid gap-8">
              <ProjectCard 
                title="Backend API System"
                description="Developed a backend API using Python to handle dynamic requests, enabling structured communication between services."
                tags={["Python", "API", "Backend"]}
              />
              
              <ProjectCard 
                title="CI/CD Pipeline for Spring Boot Application"
                description="Developed an automated pipeline to build, test, and deploy a Spring Boot application as part of backend development practice."
                tags={["CI/CD", "Spring Boot", "DevOps"]}
              />
              
              <ProjectCard 
                title="Cloud-Native Media Deployment"
                description="Designed a deployment plan for a media-based application using cloud concepts, focusing on automation, modularity, and ease of scaling."
                tags={["Cloud", "AWS", "Architecture"]}
              />
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <SectionHeading title="Certifications" />
            
            <div className="grid gap-6">
              <CertificationCard 
                title="JPMorgan Chase Software Engineering Virtual Experience"
                description="Completed a hands-on virtual program focused on backend API development, data processing, and software engineering best practices."
              />
              
              <CertificationCard 
                title="Goldman Sachs Engineering Virtual Experience"
                description="Gained practical experience in cryptography, password security, and authentication mechanisms, enhancing secure software development skills."
              />
              
              <CertificationCard 
                title="Walmart Advanced Software Engineering Virtual Experience"
                description="Worked on large-scale software engineering challenges, optimizing backend systems for high-performance applications in enterprise environments."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}