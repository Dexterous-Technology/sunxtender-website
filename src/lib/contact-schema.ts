import { z } from "zod";

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export const COUNTRIES = [
  "United States", "Canada", "Mexico", "Argentina", "Australia", "Austria", "Belgium", "Brazil",
  "Chile", "China", "Colombia", "Denmark", "Egypt", "Finland", "France", "Germany", "Greece",
  "India", "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Kenya", "Malaysia", "Netherlands",
  "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal",
  "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland",
  "Thailand", "Turkey", "United Arab Emirates", "United Kingdom", "Vietnam", "Other",
];

const opt = (max: number) => z.string().trim().max(max);

export const contactSchema = z.object({
  lastName: z.string().trim().min(1, "Last name is required.").max(100),
  firstName: z.string().trim().min(1, "First name is required.").max(100),
  company: opt(150),
  address: opt(200),
  city: opt(100),
  state: opt(60),
  zipcode: opt(20),
  country: opt(60),
  phone: opt(40),
  fax: opt(40),
  email: z.string().trim().min(1, "E-mail is required.").email("Enter a valid e-mail address.").max(255),
  message: z.string().trim().min(1, "Please enter a message.").max(5000, "Message must be under 5000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
