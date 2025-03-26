import React from "react";

const FeedbackSystem = () => {
  const onClick = (e) => {
    const parent = e.target.closest('.card');
    const dataTestId = e.target.getAttribute('data-testid');
    const newDataTestId = dataTestId.replace('btn', 'count');
    const child = parent.querySelector(`[data-testid=${newDataTestId}]`);
    const currentVotes = child.querySelector('strong').innerHTML;
    const numVotes = Number(currentVotes) + 1;
    child.querySelector('strong').innerHTML = String(numVotes);
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid="upvote-btn-0" onClick = {onClick}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-0" onClick={onClick}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Performance</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid="upvote-btn-1" onClick={onClick}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-1" onClick={onClick}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-1">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-1">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Security</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid="upvote-btn-2" onClick={onClick}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-2" onClick={onClick}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-2">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-2">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Documentation</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid="upvote-btn-3" onClick={onClick}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-3" onClick={onClick}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-3">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-3">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
        <div className="pa-10 w-300 card">
          <h2>Testing</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid="upvote-btn-4" onClick={onClick}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-4" onClick={onClick}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-4">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-4">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSystem;