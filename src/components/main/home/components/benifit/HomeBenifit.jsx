import { homeBenifit } from "@/constant/homeBenifit";
import "./styleHomeBenifit.css";
export default function HomeBenifit() {
  return (
    <div className="home_befifit flex justify-between text-center mt-6">
      {homeBenifit.map((item, index) => {
        return (
          <div className="item_home_benifit px-4 py-3" key={index}>
            <h2 className="font-bold text-2xl title_befifit py-4">
              {item.name}
            </h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
