import React from 'react';

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool';
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  metric?: string;
}

export interface Achievement {
  title: string;
  category: 'Hackathon' | 'Certification' | 'Competition' | 'Milestone';
  host: string;
  date: string;
  description: string;
  highlight?: string;
}
