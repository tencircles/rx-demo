import React from "react";

export default props => (
    <div className="stem">
        <span className="stem-number">
            {props.index > 0 ? props.index : `∅`}
        </span>
    </div>
);
