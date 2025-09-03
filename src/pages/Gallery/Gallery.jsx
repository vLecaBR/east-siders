import React from "react";
import {
  Section,
  Title,
  Subtitle,
  Grid,
  Card,
  CardImage,
  CardContent,
  CardCategory,
  CardTitle
} from "./styles";

export default function Gallery() {
  const galleryItems = [
    {
      image: "/assets/gallery/car1.jpg",
      category: "Customização",
      title: "Instalação de escape esportivo"
    },
    {
      image: "/assets/gallery/car2.jpg",
      category: "Manutenção",
      title: "Revisão completa"
    },
    {
      image: "/assets/gallery/car3.jpg",
      category: "Performance",
      title: "Upgrade de suspensão"
    },
    {
      image: "/assets/gallery/car4.jpg",
      category: "Elétrica",
      title: "Sistema de som instalado"
    },
    {
      image: "/assets/gallery/car5.jpg",
      category: "Customização",
      title: "Pintura e envelopamento"
    },
  ];

  return (
    <Section id="gallery">
      <Title>📸 Nossa Galeria</Title>
      <Subtitle>Alguns dos trabalhos que realizamos com dedicação e qualidade</Subtitle>
      <Grid>
        {galleryItems.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.image} alt={item.title} />
            <CardContent>
              <CardCategory>{item.category}</CardCategory>
              <CardTitle>{item.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
