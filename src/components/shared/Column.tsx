import React from 'react';

const Column: React.FC<{ minWidth?: number, onClick?: any }> = ({ children, minWidth = 120, onClick }) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', minWidth: `${minWidth}px` }}>
            <button onClick={onClick}>{children}</button>
        </div>
    );
};

export default Column;