import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ComparisonItem {
  feature: string;
  jira: string;
  asana: string;
  proce: string;
}

export interface TimelineItem {
  phase: string;
  title: string;
  description: string;
}
