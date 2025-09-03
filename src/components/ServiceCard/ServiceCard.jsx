import React from "react";
import { Card, IconWrap, Title, Desc } from "./styles";

export default function ServiceCard({ icon, title, desc }) {
  return (
    <Card>
      <IconWrap>{icon}</IconWrap>
      <div>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </div>
    </Card>
  );
}
