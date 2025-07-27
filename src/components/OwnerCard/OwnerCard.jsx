import React from "react";
import "../../styles/OwnerCard.css";

export default function OwnerCard({ image, name, title, desc, left }) {
  return (
    <div className={`ownercard-main ${left ? 'left' : 'right'}`}>
      <div className="ownercard-img-frame">
        <img src={image} alt={name} className="ownercard-img" />
        <div className="ownercard-frame-decor"></div>
      </div>
      <div className="ownercard-info">
        <h2>{name}</h2>
        <div className="owner-title">{title}</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
