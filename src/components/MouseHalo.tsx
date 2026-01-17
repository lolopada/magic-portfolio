"use client";

import { useEffect, useState } from "react";

const MouseHalo = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    return (
        <div
            className="mouse-halo"
            style={{
                position: "fixed",
                left: mousePosition.x,
                top: mousePosition.y,
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(100, 200, 255, 0.25) 0%, rgba(100, 200, 255, 0.10) 40%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 0,
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease-out",
                filter: "blur(30px)",
            }}
        />
    );
};

export default MouseHalo;
