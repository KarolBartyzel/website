import React from 'react';

function ExperienceEntry(props: ExperienceEntryPropsType) {
  const { date, title, company, icon, product, responsibilities, technologies } = props.experience;
  const [startDate, endDate] = date.map((date: string) =>  !isNaN(Date.parse(date)) ? new Date(date).toLocaleDateString("en-US", {
    year: '2-digit', month: 'short',
  }) : date);
  return (
    <div className="experience-entry">
      <aside className="experience-entry-date">
      <h3>{startDate} - {endDate}</h3>
      </aside>
      <div className="experience-entry-info">
        <div className="experience-entry-description">
          <h2 className="experience-entry-title">
            <img className="experience-entry-company-logo" src={icon} />
            {title}
          </h2>
          {/* <h3 className="experience-entry-company">
            <img className="experience-entry-company-logo" src={icon} />
          </h3> */}
          <h3 className="experience-entry-product">
            {product}
          </h3>
        </div>
        <div className="experience-entry-responsibilities">
          <h3>Responsibilities:</h3>
          <ul>
          {responsibilities.map((responsibility: string, index: number) => (
            <li className="experience-entry-responsibility">{responsibility}{index === responsibilities.length - 1 ? '.' : ','}</li>
          ))}
          </ul>
        </div>
        <div className="experience-entry-technologies">
          <h3>Technologies:</h3>
          <ul>
          {technologies.map((technology: string, index: number) => (
            <li className="experience-entry-responsibility">{technology}{index === responsibilities.length - 1 ? '.' : ','}</li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type ExperienceEntryPropsType = {
  experience: ExperienceType,
};

export default ExperienceEntry;
