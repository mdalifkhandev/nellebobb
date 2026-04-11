export type SecurityServiceStep =
  | {
      id: number;
      kind: "choice";
      title: string;
      options: string[];
      defaultSelectedIndex?: number;
    }
  | {
      id: number;
      kind: "input";
      title: string;
      subtitle: string;
      fields: Array<{
        id: string;
        label: string;
        placeholder: string;
      }>;
    }
  | {
      id: number;
      kind: "success";
      title: string;
      subtitle: string;
    };

export const securityServiceSteps: ReadonlyArray<SecurityServiceStep> = [
  {
    id: 1,
    kind: "choice",
    title: "Which of these best describes your situation?",
    options: [
      "Business looking for a security service",
      "Individual looking for a security",
      "I'm a security looking for a job",
    ],
    defaultSelectedIndex: 0,
  },
  {
    id: 2,
    kind: "choice",
    title: "Which of these services do you need?",
    options: ["Bodyguard's", "Event security services", "Loss prevention", "Roving patrol services", "Premises security", "Other"],
    defaultSelectedIndex: 0,
  },
  {
    id: 3,
    kind: "choice",
    title: "How many individuals need close protection?",
    options: ["1 person", "2 people", "3-5 people", "6 or more people", "Other"],
    defaultSelectedIndex: 0,
  },
  {
    id: 4,
    kind: "choice",
    title: "How many security personnel do you think you will need?",
    options: [
      "Just 1",
      "2-4",
      "5-9",
      "10-14",
      "15 or more",
      "As recommended by the pro",
      "I'm not sure",
      "Other",
    ],
    defaultSelectedIndex: 0,
  },
  {
    id: 5,
    kind: "choice",
    title: "Which time's of the day do you require security service?",
    options: ["Morning", "Afternoon", "Evening", "Night", "24/7", "Other"],
    defaultSelectedIndex: 0,
  },
  {
    id: 6,
    kind: "choice",
    title: "How often do you require this service?",
    options: ["Ongoing", "Several months", "Several weeks", "Several days", "Specific dates", "One off", "Other"],
    defaultSelectedIndex: 0,
  },
  {
    id: 7,
    kind: "choice",
    title: "When do you want the service to begin?",
    options: [
      "As soon as possible",
      "Within the next week",
      "Within the next month",
      "Within the next 3 months",
      "Other",
    ],
    defaultSelectedIndex: 0,
  },
  {
    id: 8,
    kind: "choice",
    title: "How likely are you to make a hiring decision?",
    options: [
      "I'm ready to hire now",
      "I'm definitely going to hire someone",
      "I'm likely to hire someone",
      "I will possibly hire someone",
      "I'm planning and researching",
      "Other",
    ],
    defaultSelectedIndex: 0,
  },
  {
    id: 9,
    kind: "input",
    title: "Where do you need the security man?",
    subtitle: "The postcode or town for the address where you want the security man.",
    fields: [
      {
        id: "address",
        label: "Enter your Address",
        placeholder: "Enter your Address",
      },
      {
        id: "location",
        label: "Enter your ZIP code or town",
        placeholder: "Enter your ZIP code or town",
      },
    ],
  },
  {
    id: 10,
    kind: "success",
    title: "Congratulations!",
    subtitle: "Thanks for emailing us. One of our representatives will contact you shortly.",
  },
];

export const wizardTotalSteps = securityServiceSteps.length;
