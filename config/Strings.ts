import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const Strings = {
  general: {
    viewAll: "View All",
    loading: "Loading...",
    signingIn: "Signing In...",
  },
  navigation: {
    menu: "Menu",
    home: "Home",
    back: "Back",
  },
  auth: {
    username: "Username",
    password: "Password",
    signin: "Sign In",
    forgotPassword: "Forgot Password",
    createAccount: "Create Account",
    createAccountMessage: "Don't have an account? Sign up now and unlock full access to all our services.",
    allRightsReserved: "All Rights Reserved ©",
    appVersion: "App version",

    accountCreation: "Account Creation",
    accountCreationMessage: "Select the type of account you want to create",
    individual: "Individual",
    individualAccount: "Individual Account",
    individualAccountMessage: "This account is for individuals who want to access health services, connect with healthcare professionals, and utilize other health-related services.",
    individualAccountMessage2: "It is also tailored for medical professionals to effectively manage patient interactions and conduct virtual consultations.",
    business: "Business",
    businessAccount: "Business Account",
    businessAccountMessage: "This account is for service providers,including hospitals, veterinary clinics, dental clinics, aesthetic clinics, laboratory clinics and other healthcare businesses seeking to offer their services or products and qualify for partnerships.",
    
    getStarted: "Get Started",
    getStartedMessage: "By proceeding, you agree to our",
    termsAndConditions: "Terms and Conditions",
    privacyPolicy: "Privacy Policy",
    busineesVerification: "Business Verification",
    identityVerification: "Identity Verification",
    verificationMessage: "Your business will be verified using a document issued by a country/authority.",

    mainSubtitle: "Proceed to verify your identity. We suggest you to keep your documents handy.",
  },
  services: {
    hospital: "Hospital Services",
    onlinePrescription: "Online Prescription",
    theraphy: "Therapy Services",
    healthInsurance: "Health Insurance",
    vetClinic: "Vet Clinic Services",
    dental: "Dental Services",
    dentalClinic: "Dental Clinic Services",
    aesthetic: "Aesthetic Services",
    aestheticClinic: "Aesthetic Clinic Services",
    laboratory: "Laboratory Services",

    bookAppointment: "Book Appointment",
    medicationPlanner: "Medication Planner",
    therapyServices: "Therapy Services",
    safezoneBuddy: "SafeZone Buddy",
    findSpecialist: "Find Specialist",
    locatorHubby: "Locator Hubby",
    virtualConsultation: "Virtual Consultation",
  },
  appointment: {
    header: "Upcoming Appointment",
    reminder: "Reminder:",
    reminderMessage: "To ensure you receive timely alerts for your appointments, please verify that the app has permission for alarms and reminders in your device settings. Go to ",
    notificationSettings: "Notification Settings."
  },
  shopOnline: {
    medication: "Medication",
    supplements: "Supplements",
    vitamins: "Vitamins",
    healthEssentials: "Health Essentials",
    wellnessProducts: "Wellness Products"
  },
  healthRecords: {
    pet: "Pet Health Records",
    myhealth: "My Health Records",
    family: "Family Health Records",
    employee: "Employee Health Records"
  },
  footer: {
    sosEmergency: "SOS Emergency",
    partnerDashboard: "Partner Dashboard",
    myAccountSettings: "My Account Settings"
  }
} as const;