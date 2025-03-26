import React, {useState, useEffect} from "react";

function Slides({ slides }) {

  const [slideNumber, setSlideNumber] = useState(0 ? slides.length == 0 : 1);
  const [onFirstSlide, setOnFirstSlide] = useState(true);
  const [onLastSlide, setOnLastSlide] = useState(slideNumber == slides.length);

  useEffect(() => {
    setOnLastSlide(slideNumber == slides.length);
    setOnFirstSlide(slideNumber == 1);
  }, [slideNumber]);

  const onPrev = (e) => {
    e.preventDefault();
    setSlideNumber(prevState => prevState - 1);
  };

  const onNext = (e) => {
    e.preventDefault();
    setSlideNumber(prevState => prevState + 1);
  };

  const onRestart = (e) => {
    e.preventDefault();
    setSlideNumber(0 ? slides.length == 0 : 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={onRestart} disabled={onFirstSlide}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={onPrev} disabled={onFirstSlide}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={onNext} disabled={onLastSlide}>
          Next
        </button>
      </div>
      {
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slideNumber - 1].title}</h1>
        <p data-testid="text">{slides[slideNumber - 1].text}</p>
      </div>
      }
    </div>
  );
}

export default Slides;