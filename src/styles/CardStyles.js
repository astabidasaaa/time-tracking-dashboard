import styled from "styled-components";

const CardStyles = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding-top: 2rem;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0.6rem;
  overflow: hidden;

  svg.bg-icon {
    position: absolute;
    top: -0.5rem;
    right: 0.5rem;
    z-index: 1;
  }

  .card-inner {
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--darkBlue);
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

    &:hover {
      background-color: var(--desaturatedBlue);
      cursor: pointer;
    }

    .card-identifier {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    .card-content {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      box-sizing: border-box;

      @media (max-width: 425px) {
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;

export default CardStyles;
