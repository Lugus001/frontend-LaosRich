import React from 'react';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    const angle = progress * 360;

    return (
        <div
            className="rounded-full"
            style={{
                background: `radial-gradient(circle at center, #9c27b0 55%, transparent 56%),
                             conic-gradient(transparent 0deg ${angle}deg, #2196f3 ${angle}deg 360deg),
                             #4caf50`,
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default ProgressCircle;
