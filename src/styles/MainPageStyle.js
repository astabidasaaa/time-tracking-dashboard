import styled from "styled-components";

const PageStyle = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font: var(--mediumWeight) var(--h6) var(--sansSerif);

  #grid-container {
    display: grid;
    grid-template-columns: repeat(4, 14rem);
    grid-template-rows: repeat(2, auto);
    gap: var(--spacing);

    #profile {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    #work {
      grid-column: 2 / 3;
      grid-row: 1;
      background-color: var(--orange);
    }

    #play {
      grid-column: 3 / 4;
      grid-row: 1;
      background-color: var(--softBlue);
    }

    #study {
      grid-column: 4 / 5;
      grid-row: 1;
      background-color: var(--lightRed);
    }

    #exercise {
      grid-column: 2 / 3;
      grid-row: 2;
      background-color: var(--limeGreen);
    }

    #social {
      grid-column: 3 / 4;
      grid-row: 2;
      background-color: var(--violet);
    }

    #self-care {
      grid-column: 4 / 5;
      grid-row: 2;
      background-color: var(--yellow);
    }

    @media (max-width: 425px) {
      width: 100%;
      grid-template-columns: repeat(1, 100%);
      grid-template-rows: repeat(7, auto);
      gap: var(--spacing);

      #profile {
        grid-column: 1 / 2;
        grid-row: 1;
      }

      #work {
        grid-column: 1 / 2;
        grid-row: 2;
        background-color: var(--orange);
      }

      #play {
        grid-column: 1 / 2;
        grid-row: 3;
        background-color: var(--softBlue);
      }

      #study {
        grid-column: 1 / 2;
        grid-row: 4;
        background-color: var(--lightRed);
      }

      #exercise {
        grid-column: 1 / 2;
        grid-row: 5;
        background-color: var(--limeGreen);
      }

      #social {
        grid-column: 1 / 2;
        grid-row: 6;
        background-color: var(--violet);
      }

      #self-care {
        grid-column: 1 / 2;
        grid-row: 7;
        background-color: var(--yellow);
      }
    }

    #profile {
      background-color: var(--darkBlue);
      border-radius: 0.6rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      #profile-identifier {
        width: 100%;
        box-sizing: border-box;
        background-color: var(--blue);
        padding: 1.5rem 1.5rem 4rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2rem;
        border-radius: 0.5rem;

        @media (max-width: 425px) {
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          padding: 1.5rem 1.5rem;
          gap: 1rem;
        }

        & > div:first-child {
          width: 4.5rem;
          box-sizing: border-box;
          border: 3px solid white;
          border-radius: 50%;
        }

        #profile-name {
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }

      #timeframe-menu {
        padding: 1.5rem 1.5rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
        width: 100%;
        box-sizing: border-box;

        button {
          font-size: var(--para);
          background-color: transparent;
          color: white;
          border: none;
          outline: none;
          opacity: 0.5;

          &:hover {
            opacity: 1;
          }

          &:focus-visible {
            opacity: 1;
            outline: 2px solid white;
            background-color: white;
            color: var(--darkBlue);
          }

          &.button-active {
            opacity: 1;
          }
        }

        @media (max-width: 425px) {
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }

  #author {
    margin: 2rem 0;
    letter-spacing: 0.6rem;
    opacity: 0.5;

    a {
      color: white;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default PageStyle;
