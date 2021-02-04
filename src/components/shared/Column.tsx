import React from 'react';
import styled from '@emotion/styled';
interface Props {
  children: any
  flex?: number;
}

function Column(props: Props): React.ReactElement {
  const {children, flex = 1} = props;
  
  return (
    <Container style={{flex}}>{children}</Container>
  );
} 

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;


// const Column: React.FC<{ minWidth?: number, onClick?: any }> = ({ children, minWidth = 120, onClick }) => {
//     return (
//         <div style={{ border: '1px solid black', padding: '10px', minWidth: `${minWidth}px` }}>
//             <button onClick={onClick}>{children}</button>
//         </div>
//     );
// };

export default Column;