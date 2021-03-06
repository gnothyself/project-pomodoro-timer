import React from "react";

function ProgressBar({ progressBarIncrease }) {
    return (
        <div>
          <div className="row mb-2">
            <div className="col">
              <div className="progress" style={{ height: 20 }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={ progressBarIncrease() } // COMPLETE: Increase aria-valuenow as elapsed time increases
                  style={{ width: `${progressBarIncrease()}%`} } // COMPLETE: Increase width % as elapsed time increases
                />
              </div>
            </div>
          </div>
        </div>
      );
}

export default ProgressBar