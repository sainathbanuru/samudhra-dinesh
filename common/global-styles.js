import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: 'Objectivity-Regular';
    src: url("/static/fonts/Objectivity-Regular.otf");
  }

  @font-face {
    font-family: 'PlayfairDisplay-Bold';
    src: url("/static/fonts/PlayfairDisplay-Bold.ttf")
  }

  @font-face {
    font-family: 'Objectivity-Bold';
    src: url("/static/fonts/Objectivity-Bold.otf")
  }

  @font-face {
    font-family: 'Quicksand-Regular';
    src: url("/static/fonts/Quicksand-Regular.ttf")
  }

  @font-face {
    font-family: 'Quicksand-Bold';
    src: url("/static/fonts/Quicksand-Bold.ttf")
  }

  @font-face {
    font-family: 'Sans-Narrow-Regular';
    src: url("/static/fonts/Sans-Narrow-Regular.ttf")
  }

  @font-face {
    font-family: 'Sans-Narrow-Bold';
    src: url("/static/fonts/Sans-Narrow-Bold.ttf")
  }


  body {
    margin: 0;
    background-color: #fff;
    font-family: "Objectivity-Regular";
    color: #000;
  }

  div {
    position: relative;
  }


  #imp-love { display: none }


  .wrapper {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
  }

  .container {
    position: relative;
  }
  
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    backface-visibility: hidden;
  }
  
  .middle {
    transition: .5s ease;
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .imageContainer:hover .image {
    opacity: 0.8;
  }
  
  .imageContainer:hover .middle {
    opacity: 1;
  }

  .no-scroll{
    overflow: hidden
  }  
  

  .container {
    padding: 40px;
    background: #fff;
  }

  .slick-slide img {
    margin: auto;
  }

  .slick-next:before, .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #000;
  }

  @media (max-width: 767px) {
    .wrapper {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
