import { Component, OnInit, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

interface Stat {
  value: number;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Portfolio';
  activeSection = 'home';
  isScrolling = false;
  typedText = '';
  currentTypingIndex = 0;
  isDeleting = false;
  typewriterTexts = ['Junior .NET Developer', 'Full-Stack Developer', 'Backend Developer', 'Software Engineer'];
  currentTextIndex = 0;
  Math = Math;
  
  animatedStats = [
    { value: 0, label: 'Year of Experience', icon: 'fas fa-briefcase', target: 1 }
  ];
  
  experienceItems = [
    { year: '2024-2025', title: 'Junior .NET Developer (Contractor For AIB)', company: 'Jalmia Solutions - Tubbercurry', description: 'Developed and maintained full-stack features using C#, .NET Core, SQL Server, SSIS, and JavaScript/Angular. Designed and implemented REST APIs and data processing components for backend workflows. Applied object-oriented principles, MVC architecture, and design patterns to create modular, maintainable code. Built and enhanced front-end functionality using Angular, HTML, CSS, and JavaScript. Optimized SQL queries and database interactions, enhancing performance and reliability. Participated in Agile sprints, contributing to development, testing, debugging, deployment, and cross-team collaboration.' }
  ];

  educationItems = [
    { year: '2022-2025', degree: 'Bachelor of Science (Honours) in Computing', institution: 'Atlantic Technological University', grade: '2.1 Second Class Honours' }
  ];

  skills: Skill[] = [
    { name: 'C#', level: 90, icon: 'fas fa-code' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'Java', level: 80, icon: 'fab fa-java' },
    { name: 'Python', level: 75, icon: 'fab fa-python' },
    { name: 'SQL', level: 85, icon: 'fas fa-database' },
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'Angular', level: 80, icon: 'fab fa-angular' },
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
    { name: '.NET', level: 85, icon: 'fab fa-windows' },
    { name: 'Git/GitHub', level: 85, icon: 'fab fa-git-alt' },
    { name: 'AWS', level: 70, icon: 'fab fa-aws' }
  ];

  projects: Project[] = [
    {
      title: 'KD Beauty - Appointment Booking System',
      description: 'Full-stack nail appointment booking application built for a beauty salon client. Features include admin dashboard with booking management, client booking interface, appointment scheduling, real-time availability, and user authentication. Comprises separate Angular frontend and Node.js backend with MongoDB database, deployed on Vercel.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'REST API'],
      image: 'assets/images/katie Nail Page.png',
      github: 'https://github.com/jmdvx',
      demo: 'https://kdbeauty.vercel.app/'
    }
  ];

  ngOnInit(): void {
    this.startTypewriter();
    this.detectActiveSection();
    this.initStatsAnimation();
  }

  ngAfterViewInit(): void {
    this.observeElements();
  }

  startTypewriter(): void {
    const currentText = this.typewriterTexts[this.currentTextIndex];
    
    if (!this.isDeleting) {
      this.typedText = currentText.substring(0, this.currentTypingIndex + 1);
      this.currentTypingIndex++;
      
      if (this.currentTypingIndex === currentText.length) {
        this.isDeleting = true;
        setTimeout(() => this.startTypewriter(), 3000);
        return;
      }
    } else {
      this.typedText = currentText.substring(0, this.currentTypingIndex - 1);
      this.currentTypingIndex--;
      
      if (this.currentTypingIndex === 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterTexts.length;
      }
    }
    
    setTimeout(() => this.startTypewriter(), this.isDeleting ? 50 : 100);
  }

  initStatsAnimation(): void {
    setTimeout(() => {
      this.animateStats();
    }, 2000);
  }

  animateStats(): void {
    const animate = (stat: any) => {
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        if (stat.value < stat.target) {
          stat.value = Math.min(stat.value + increment, stat.target);
        } else {
          clearInterval(timer);
        }
      }, 30);
    };

    this.animatedStats.forEach(stat => animate(stat));
  }

  observeElements(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.skill-card, .project-card, .experience-item, .education-item');
    elements.forEach(el => observer.observe(el));
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.detectActiveSection();
    this.parallaxEffect();
  }

  parallaxEffect(): void {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element: Element) => {
      const speed = 0.5;
      const elementTop = (element as HTMLElement).offsetTop;
      const elementHeight = (element as HTMLElement).offsetHeight;
      
      if (window.pageYOffset > elementTop - window.innerHeight && 
          window.pageYOffset < elementTop + elementHeight) {
        (element as HTMLElement).style.transform = `translateY(${(scrolled - elementTop) * speed}px)`;
      }
    });
  }

  detectActiveSection(): void {
    const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
    const scrollPosition = window.pageYOffset + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (cursor) {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

