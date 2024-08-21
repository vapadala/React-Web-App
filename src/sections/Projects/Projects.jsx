import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects"
          h3="Go"
          p="Green Vibe App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/vphttps://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects/company-landing-page"
          h3="Farm Fresh"
          p="Yummy Fresh App"
        />
        <ProjectCard
          src={hipsster}
          link="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects"
          h3="Glasses"
          p="Shop Your Glasses"
        />
        <ProjectCard
          src={fitLift}
          link="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects"
          h3="FitLift"
          p="Fitness Fit App"
        />
      </div>
    </section>
  );
}

export default Projects;
