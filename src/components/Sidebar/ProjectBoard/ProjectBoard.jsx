import projectBoardStyles from "./projectboard.module.css";
import Button from "../Button/Button";
const ProjectBoard = () => {
  return (
    <section className={projectBoardStyles.projectBoard}>
      <h1>YOUR PROJECTS</h1>
      <Button>+ Add Project</Button>
      <ul>
        <li>Project 1</li>
      </ul>
    </section>
  );
};

export default ProjectBoard;
