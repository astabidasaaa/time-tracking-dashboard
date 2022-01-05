import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
h1 {
  font: var(--regularWeight) var(--h1) var(--sansSerif);
}

p {
  font: var(--regularWeight) var(--para) var(--sansSerif);
  color: var(--white);

  &.subPara {
      font-size: var(--subPara);
  }
}

h2,
h3,
h4, 
h5,
 {
  font-family: var(--sansSerif);
  font-weight: var(--regularWeight);
  letter-spacing: 0px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--white);
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
  font-weight: var(--boldWeight);
}
`;

export default Typography;
