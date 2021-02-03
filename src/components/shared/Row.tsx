import React, { useState } from 'react';

const Row: React.FC<{ onClick?: any; hoverColor: string }> = ({
    children,
    onClick,
    hoverColor = '#f15e5e',
}) => {
    const [isOnFocus, setIsOnFocus] = useState(false);
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events
        <div
            role="row"
            style={{
                display: 'flex',
                backgroundColor: isOnFocus ? hoverColor : '#fff',
                width: 'fit-content',
                cursor: 'pointer',
            }}
            onClick={onClick}
            onMouseOver={() => {
                setIsOnFocus(true);
            }}
            onMouseLeave={() => {
                setIsOnFocus(false);
            }}
        >
            {children}
        </div>
    );
};

export default Row;