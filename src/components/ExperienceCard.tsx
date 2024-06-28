interface ExperienceCardProps {
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export function ExperienceCard({
  company,
  startDate,
  endDate,
  description,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <h3 className="pt-4 text-center">
        {company} ({startDate} - {endDate})
      </h3>
      <p className="normal">{description}</p>
      <ul className="list-disc list-inside mx-auto pl-6">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="mb-2">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
