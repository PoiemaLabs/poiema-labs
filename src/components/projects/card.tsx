import "../../styles/projects.css";

export interface CardProps {
  title: string;
  description: string;
  icon?: string;
  gradient?: string;
}

export function Card({
  title,
  description,
  icon,
  gradient,
}: CardProps) {
  const style = {
    background: `${gradient}`
  }

  return (
    <article
      className={"project-card project-card--link"}
      style={style}
      aria-label={`View ${title} project`}
    >
      {icon && (<img className="project-image" src={`${icon}`} alt={`${title} icon`} />)}
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
    </article>
  );
}
