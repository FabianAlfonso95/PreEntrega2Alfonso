import "./Slider.css";

export const Slider = () => {
  return (
    <>
      <section className="SliderSection">
        <div className="SliderDiv">
          <div className="SliderDivIn">
            <img id="slider1" src="/sliderA.jpg" alt=""></img>
            <img id="slider2" src="/sliderB.jpg" alt=""></img>
          </div>
          <div className="slider-nav">
            <a href="#slider1"> </a>

            <a href="#slider2"> </a>
          </div>
        </div>
      </section>
    </>
  );
};
