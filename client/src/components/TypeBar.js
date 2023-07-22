import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

export default function TypeBar() {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          active={(device.selectedType.id = type.id)}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
