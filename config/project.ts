import React from "react";
import { IconType } from "react-icons";

export interface TechStackItem {
  name: string;
  description: string;
  color: string;
  icon: IconType;
}

export interface FeatureDetail {
  title: string;
  description: string;
  icon: React.ComponentType;
  technicalDetails?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
  fullDescription: string;
  techStack: TechStackItem[];
  features: FeatureDetail[];
  challenges?: string[];
  githubUrl?: string;
  liveUrl?: string;
  announcement?: boolean;
  goseekFeature?: boolean;
  filescopeFeature?: boolean;
  architectureDetails?: string;
  performanceMetrics?: {
    [key: string]: string;
  };
}
