import React from 'react';

function EducationEntry(props: EducationEntryPropsType) {
  const { date, title, field, university, icon } = props.education;
  const [startDate, endDate] = date.map((date: string) =>  !isNaN(Date.parse(date)) ? new Date(date).toLocaleDateString("en-US", {
    year: '2-digit', month: 'short',
  }) : date);
  return (
    <div className="education-entry">
      <aside className="education-entry-date">
      <h3>{startDate} - {endDate}</h3>
      </aside>
      <div className="education-entry-info">
        <div className="education-entry-description">
          <h2 className="education-entry-title">
            {title}
          </h2>
          <h3 className="education-entry-field">
            {field}
          </h3>
          <h3 className="education-entry-university">
            <img className="education-entry-university-faculty" src={icon} />
            {university}
          </h3>
        </div>
      </div>
    </div>
  );
}

type EducationEntryPropsType = {
  education: EducationType,
};

export default EducationEntry;
