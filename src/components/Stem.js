import React from "react";

export default props => {
    return (
        <div className="stem">
            {props.index > 0 ? props.index : "∅"}
        </div>
    );
};
