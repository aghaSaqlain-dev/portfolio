
const TechItem = ({ icon: Icon, name }) => {
  return (
    <div className="tech-item">
      <Icon className="tech-icon" />
      <span>{name}</span>
    </div>
  )
}

export default TechItem
