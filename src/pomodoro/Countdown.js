import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Countdown({ session, focusDuration, breakDuration }) {
    return (
    <div>
        {/* COMPLETE: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
            {session ? (
                <div className="col">
                    {/* COMPLETE: Update message below to include current session (Focusing or On Break) total duration */}
                    <h2 data-testid="session-title">
                        {session.label} for {" "}
                        {minutesToDuration(
                            session.label === "On Break" ? breakDuration : focusDuration
                        )}{" "}
                        minutes
                    </h2>
                    {/* COMPLETE: Update message below correctly format the time remaining in the current session */}
                    <p className="lead" data-testid="session-sub-title">
                        {secondsToDuration(session.timeRemaining)} remaining
                    </p>
                </div>
            ) : null}
        </div>
        <div hidden={!(session && session.visible)}>
            <h2>Paused</h2>
        </div>
    </div>
    );
}

export default Countdown