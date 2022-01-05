import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');

:root {
    --regularWeight: 300;
    --mediumWeight: 400;
    --boldWeight: 500;
    --transMed: 0.1s;
    --transSlow: 0.3s;
    --blue: hsl(246, 80%, 60%);
    --orange: hsl(15, 100%, 70%);
    --softBlue: hsl(195, 74%, 62%);
    --lightRed: hsl(348, 100%, 68%);
    --limeGreen: hsl(145, 58%, 55%);
    --violet: hsl(264, 64%, 52%);
    --yellow: hsl(43, 84%, 65%);
    --veryDarkBlue: hsl(226, 43%, 10%);
    --darkBlue: hsl(235, 46%, 20%);
    --desaturatedBlue: hsl(235, 45%, 61%);
    --paleBlue: hsl(236, 100%, 87%);
    --sansSerif: 'Rubik', sans-serif; 
    --h1: 3rem;
    --h2: 2.4rem;
    --h3: 2rem;
    --h4: 1.5rem;
    --h5: 1.25rem;
    --h6: 1.125rem;
    --footerMenuItem: 0.85rem;
    --xlPara: 1.25rem;
    --lPara: 1.125rem;
    --para: 1rem;
    --subPara: 0.9rem;
    --spacing: 1rem;

    @media (max-width: 425px) {
      --h1: 2.4rem;
      --h2: 1.5rem;
      --h3: 1.25rem;
      --h4: 1.125rem;
      --h5: 1rem;
      --h6: 1rem;
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--veryDarkBlue);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--desaturatedBlue);
      border-radius: 0.25rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--paleBlue);
    }
  }

  html {
    // height: 100%;
    min-height: 100vh;
  }
  
  body {
    height: 100%;
    min-height: 100vh;
    font-family: var(--sansSerif);
    color: white;
    font-size: var(--para);
    margin: 0;
    background-color: white;
  }

  body > div:first-child {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    // padding: 0 5%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    background-color: white;

    @media (max-width: 900px) {
      flex-flow: column nowrap;
    }
  }

  .main-body {
   box-sizing: border-box;
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
   width: calc(100% - 2 * 2.5rem);
   overflow-wrap: break-word;
   background-color: var(--veryDarkBlue);
   padding: 3rem 1.5rem;
   width: 100vw;
   height: 100%;
   min-height: 100vh;

   
  }

`;

export default GlobalStyles;
