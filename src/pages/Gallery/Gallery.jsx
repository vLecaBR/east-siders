import React from "react";
import Slider from "react-slick";
import {
  Section,
  Title,
  Subtitle,
  Grid,
  Card,
  CardContent,
  CardCategory,
  CardTitle,
  CarouselImage
} from "./styles";

export default function Gallery() {
  const galleryItems = [
    {
      images: [
        "/assets/gallery/car1-1.jpg",
        "/assets/gallery/car1-2.jpg",
        "/assets/gallery/car1-3.jpg"
      ],
      category: "Customização",
      title: "Instalação de escape esportivo"
    },
    {
      images: [
        "/assets/gallery/car2-1.jpg",
        "/assets/gallery/car2-2.jpg",
        "/assets/gallery/car2-3.jpg"
      ],
      category: "Manutenção",
      title: "Revisão completa"
    },
    {
      images: [
        "/assets/gallery/car3-1.jpg",
        "/assets/gallery/car3-2.jpg"
      ],
      category: "Performance",
      title: "Upgrade de suspensão"
    },
    {
      images: [
        "/assets/gallery/car4-1.jpg",
        "/assets/gallery/car4-2.jpg",
        "/assets/gallery/car4-3.jpg"
      ],
      category: "Elétrica",
      title: "Sistema de som instalado"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <Section id="gallery">
      <Title>📸 Nossa Galeria</Title>
      <Subtitle>Veja nossos serviços realizados com qualidade e atenção aos detalhes</Subtitle>
      <Grid>
        {galleryItems.map((item, index) => (
          <Card key={index}>
            <Slider {...settings}>
              {item.images.map((img, idx) => (
                <CarouselImage key={idx} src={img} alt={item.title} />
              ))}
            </Slider>
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
