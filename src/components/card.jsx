import React from "react";

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0)
        badgeText = "sold out"
    else if(props.item.location == "Online")
        badgeText = "online"

    return (
        <div className="card">
            <div className="card-img">
                <img src={`public/images/${props.item.coverImg}`} className="card-img-top" alt={props.item.alt} />
                {badgeText && <span className="card-stock rounded px-2 py-1 lh-base text-center text-bg-light text-uppercase">{badgeText}</span>}
            </div>

            <div className="card-body lh-lg">
                <div className="card-rating">
                    <i className="fa-solid fa-star"></i>
                    <span className="px-2">{props.item.stats.rating}</span>
                    <span className="number-location">({props.item.stats.reviewCount})</span>
                    <span className="number-location"> • {props.item.location}</span>
                </div>
                <p className="card-text">{props.item.title}</p>
                <p className="card-price py-0">
                    <span className="fw-bold">From ${props.item.price}</span> / person
                </p>

            </div>
        </div>
    );
}

