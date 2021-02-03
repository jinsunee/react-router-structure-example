import Column from '../shared/Column';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Row from '../shared/Row';
import { users } from '../../assets/users';

const Item: React.FC<RouteComponentProps<{userID: string}>> = ({
  history,
  match,
  location,
}) => {
  const { params } = match;
  const ID_MIN_WIDTH = 30;
  
  const { userID } = params;

  return (
    <>
      <Row hoverColor="#fad800">
        <Column minWidth={ID_MIN_WIDTH}>id</Column>
        <Column>first name</Column>
        <Column>last name</Column>
        <Column>bank account</Column>
      </Row>
      {users
        .filter((user) => user.id === parseInt(userID, 10))
        .map((user) => {
          return (
            <Row
              hoverColor="#ffb3b3"
              key={user.id}
              onClick={() => {
                history.goBack();
              }}
            >
              <Column minWidth={ID_MIN_WIDTH}>{user.id}</Column>
              <Column>{user.firstName}</Column>
              <Column>{user.lastName}</Column>
              <Column>{user.bankAccount}</Column>
            </Row>
          );
        })}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>Current location:</div>
          <h3>{` "${location.pathname}"`}</h3>
        </div>
      </>
  );
}

export default Item;