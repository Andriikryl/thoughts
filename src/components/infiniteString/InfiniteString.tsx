import React from "react";
import "./infinite.css";
export default function InfiniteString() {
  return (
    <div className="marquee">
      <ul className="marquee__content" role="list">
        <li className="marquee__item">Post</li>
        <li className="marquee__item">Post</li>
        <li className="marquee__item">Post</li>
      </ul>
      <ul className="marquee__content" aria-hidden="true" role="list">
        <li className="marquee__item">Post</li>
        <li className="marquee__item">Post</li>
        <li className="marquee__item">Post</li>
      </ul>
    </div>
  );
}
