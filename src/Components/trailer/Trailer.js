import React from "react";

export default function Trailer({ url }) {
  return (
    <div>
      <div
        id="small-dialog"
        className="zoom-anim-dialog mfp-hide flex justify-center items-center"
      >
        <iframe
          src={url}
          frameBorder={0}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
