import inputStyles from "./input.module.css";
import Button from "../Button/Button";

const Input = () => {
  return (
    <section className={inputStyles.inputSection}>
      <div className={inputStyles.buttonContainer}>
        <Button secondaryBtn={true} resizeBtn={true}>
          Cancel
        </Button>
        <Button resizeBtn={true}>Save</Button>
      </div>
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input id="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            className={inputStyles.descriptionInput}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="date">Due Date</label>
          <br />
          <input type="date" name="date" id="date" />
        </div>
      </div>
    </section>
  );
};

export default Input;
