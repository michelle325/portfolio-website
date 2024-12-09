import React from 'react';
import {
  educationData,
  experienceData,
  ExperienceItem,
  Role,
} from '../data/experienceData';

interface RoleProps {
  role: Role;
}

const RoleComponent: React.FC<RoleProps> = ({ role }) => (
  <div>
    <h3>{role.title}</h3>
    <ul>
      {role.responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);

interface ExperienceItemProps {
  experience: ExperienceItem;
}

const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({
  experience,
}) => (
  <article>
    <h2 className="item-title">
      {experience.company} - {experience.location}
    </h2>
    {experience.roles.map((role, index) => (
      <RoleComponent key={index} role={role} />
    ))}
  </article>
);

const Experience: React.FC = () => {
  return (
    <main className="experience-page">
      <header>
        <h1 className="section-header">Education</h1>
      </header>
      <h2 className="item-title">{educationData.university}</h2>
      <section>
        <ul>
          {educationData.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </section>

      <header>
        <h1 className="section-header">Experience</h1>
      </header>
      <section>
        {experienceData.map((item, index) => (
          <ExperienceItemComponent key={index} experience={item} />
        ))}
      </section>
    </main>
  );
};

export default Experience;