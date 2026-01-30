import React, { useEffect, useState } from 'react';

const CursorFollow: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        const handleMouseOut = () => setIsVisible(false);
        const handleMouseIn = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseOut);
        document.addEventListener('mouseenter', handleMouseIn);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseIn);
        };
    }, [isVisible]);

    if (typeof window === 'undefined') return null;

    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden lg:block`}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            <div
                className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-white transition-all duration-300 ease-out ${isPointer ? 'w-12 h-12 bg-white/20' : 'w-6 h-6 bg-transparent'
                    }`}
            />
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
        </div>
    );
};

export default CursorFollow;
