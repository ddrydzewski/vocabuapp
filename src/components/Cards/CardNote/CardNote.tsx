import { Icon } from "precise-ui/dist/es6";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface IProps {
  note: string;
}

export const CardNote: React.FC<IProps> = ({ note }) => {
  return (

      <OverlayTrigger
        key={note}
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-bottom`}>{note}</Tooltip>}
      >
        <Icon name="Info" />
      </OverlayTrigger>
   
  );
};
