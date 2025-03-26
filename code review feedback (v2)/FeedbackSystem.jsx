import React, { useState } from "react";

const FeedbackSystem = () => {
  const [cards, setCards] = useState([{name: 'Readability', upvote: 0, downvote: 0}, 
                                      {name: 'Performance', upvote: 0, downvote: 0},
                                      {name: 'Security', upvote: 0, downvote: 0},
                                      {name: 'Documentation', upvote: 0, downvote: 0},
                                      {name: 'Testing', upvote: 0, downvote: 0}]);

  const onClick = (e) => {
    const dataTestId = e.currentTarget.getAttribute('data-testid');
    const idx = Number(dataTestId[dataTestId.length - 1]);
    const typeOfVote = dataTestId.slice(0, dataTestId.length-6);
    setCards((prevState) => {
      const newState = [...prevState];
      newState[idx][typeOfVote] += 1;
      return newState;
    });
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {cards.map((card, idx) => (<div className="pa-10 w-300 card" key={idx}>
          <h2>{card.name}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid={`upvote-btn-${idx}`} onClick={onClick}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid={`downvote-btn-${idx}`} onClick={onClick}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${idx}`}>
            Upvotes: <strong>{card.upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${idx}`}>
            Downvotes: <strong>{card.downvote}</strong>
          </p>
        </div>))}
      </div>
    </div>
  );
};

export default FeedbackSystem;