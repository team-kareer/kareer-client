export interface PersonalInformationForm {
  name: string;
  Birth: string;
  Country: string;
  OpikKiip: string;
}

export interface VisaInformationForm {
  visaType: string;
  GraduationDate: string;
  IssuanceDate: string;
  ExpirationDate: string;
}

export interface TargetRole {
  PrimaruMajor: string;
  SecondaryMajor: string;
  TargetJob: string;
}

export interface BackgroundForm {
  UserCareerIntroduction: string;
}

export interface OnboardingForm {
  personalInformation: PersonalInformationForm;
  visaInformation: VisaInformationForm;
  targetRole: TargetRole;
  background: BackgroundForm;
}
