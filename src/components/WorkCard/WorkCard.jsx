import React from "react";
import { Card, Img, Info, Tags } from "./styles";

export default function WorkCard({ image, title, desc, tags = [] }) {
  return (
    <Card>
      <Img style={{backgroundImage:`url(${image})`}} />
      <Info>
        <h4>{title}</h4>
        <p>{desc}</p>
        <Tags>{tags.map(t => <span key={t}>{t}</span>)}</Tags>
      </Info>
    </Card>
  );
}
