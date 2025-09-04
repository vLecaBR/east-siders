import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  background: rgba(15, 15, 15, 0.95);
  padding: 80px 24px;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const SectionAlt = styled.section`
  text-align: center;
  background: #111;
  padding: 80px 24px;
  border-top: 3px solid #c1272d;
  border-bottom: 3px solid #c1272d;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 16px;
  font-family: "Bebas Neue", sans-serif;
  text-transform: uppercase;
  color: #f1f1f1;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 12px;
    background: url("/assets/spray-brush.png") repeat-x;
    background-size: contain;
    opacity: 0.8;
  }
`;

export const Subtitle = styled.p`
  color: #ccc;
  font-size: 1.1rem;
  max-width: 720px;
  margin: 0 auto 40px;
  line-height: 1.6;
  font-family: "Roboto Mono", monospace;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
`;

export const GridWorks = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const StreetBg = styled.div`
  background: url("/assets/concrete-texture.jpg") center/cover no-repeat;
  padding: 40px 0;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 10, 0.85);
    z-index: -1;
  }
`;
