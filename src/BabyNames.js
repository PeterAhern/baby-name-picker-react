import React from "react";

const BabyNames = (props) => {
    return (
        <div className="allNamesContainer">
            {props.data.map((babyname)=> {
                return babyname.name + "/U+26A5/ "
            })}
        </div>
    )
}
export default BabyNames;
