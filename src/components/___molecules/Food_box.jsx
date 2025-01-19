import Food_image from "../___atoms/Food_image";
import "../___molecules/Food_box.css";
import photo1 from "../../assets/Pizza Photo (1).svg";
import photo2 from "../../assets/Tortellini Photo (1).svg";
import photo3 from "../../assets/Strawberry cake Photo (1).svg";

function Food_box() {
  return (
    <div className="food_cont">
      <Food_image foodimage={photo1} />
      <Food_image foodimage={photo2} />
      <Food_image foodimage={photo3} />
    </div>
  );
}

export default Food_box;
