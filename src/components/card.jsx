import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} className="card-img-top" alt={props.alt} />
                <span className="card-stock rounded px-2 py-1 lh-base text-center text-bg-light">SOLD OUT</span>
            </div>

            <div className="card-body lh-lg">
                <div className="card-rating">
                    <i className="fa-solid fa-star"></i>
                    <span className="px-2">{props.rating}</span>
                    <span className="number-location">({props.reviewCount})</span>
                    <span className="number-location"> •{props.country}</span>
                </div>
                <p className="card-text">{props.title}</p>
                <p className="card-price py-0">
                    <span className="fw-bold">From ${props.price}</span> / person
                </p>

            </div>
        </div>
    );
}

