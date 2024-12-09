export interface Role{
    title: string;
    responsibilities:string[];
}

export interface ExperienceItem{
    company: string;
    location: string;
    roles: Role[];
}

export interface Education{
    university: string;
    details: string[];
}

export const educationData: Education={
    university:'The University of Texas at Austin',
    details:[
        'May 2023',
        "Bachelor's of Science Psychology",
        'Certificate: Pre-Health',
    ],
};

export const experienceData: ExperienceItem[] = [
    {
      company: 'ATX Counseling',
      location: 'Austin, TX',
      roles: [
        {
          title: 'Client Care Coordinator',
          responsibilities: [
            'Utilized Electronic Health Records (EHR) and private practice software to manage intake calls, schedule clients, and communicate within the practice serving five therapists and 75+ clients.',
            'Managed payroll operations, provided documentation for insurance, and completed billing and administrative tasks for the private practice.',
            'Created and managed Instagram content to promote the business, increasing brand visibility and engagement.',
          ],
        },
        {
          title: 'Psychology Intern',
          responsibilities: [
            'Completed marketing assignments targeting middle and high school students in the AISD school system.',
            'Observed clinical supervision sessions to create treatment plans for clients.',
            'Transcribed 45+ client case notes weekly into electronic health records efficiently.',
            'Provided feedback towards developing the internship program.',
          ],
        },
      ],
    },
    {
      company: 'UT Austin Longhorn Wellness Center',
      location: 'Austin, TX',
      roles: [
        {
          title: 'Mindfulness Intern',
          responsibilities: [
            'Worked 10 hours weekly leading university-wide mindfulness workshops including stress reduction, self-care, and community care.',
            'Created an informational and interactive mindfulness pamphlet designed to support students by integrating mindfulness exercises for stress reduction and wellbeing.',
            'Partnered with campus organizations to promote mindfulness initiatives, increase accessibility to mental health resources, and support student wellness.',
          ],
        },
      ],
    },
    {
        company: 'UT Austin',
        location: 'Austin, TX',
        roles: [
          {
            title: "COVID-19 Vaccine Mixer and Vaccinator",
            responsibilities: [
                "Volunteered as an Emergency Medical Technician, dedicating 6+ hours a week to support the COVID-19 Vaccination clinic.",
                "Mixed, prepared, and administered 30+ COVID-19 vaccines every week.",
                "Handled and processed patient health information securely.",
                "Coordinated with staff and students from UT Health Austin, Dell Medical School, UT School of Nursing, UT College of Pharmacy, UT Steve Hicks School of Social Work, UT University Health Services, and the Office of Emergency Preparedness."
            ]
          },
        ],
      },
];