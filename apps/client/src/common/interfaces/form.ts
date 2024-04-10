export enum ELevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}

export interface IFormData {
  level: ELevel;
  topic?: string;
}
