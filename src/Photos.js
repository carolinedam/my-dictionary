import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                {photo}
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
