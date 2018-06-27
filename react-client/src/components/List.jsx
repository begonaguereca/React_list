import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="paper">
    <ul className="list-group">
      { props.items.map((item, i) => <ListItem item={item} key={i} id={i} delete={props.delete}/>) }
    </ul>
  </div>
)

export default List;
