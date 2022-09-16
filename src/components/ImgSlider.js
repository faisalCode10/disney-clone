import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <Carousal {...settings}>
      <Wrap>
        <img src = "/images/slider-badging.jpg" alt = '' />
      </Wrap>
      <Wrap>
        <img src = "/images/slider-badag.jpg" alt = '' />
      </Wrap>
    </Carousal>
  )
}

export default ImgSlider


const Carousal = styled(Slider)`
        margin-top:20px;

        li.slick-active button:before{
            color:rgb(150,158, 171);
        }

        .slick-list{
            overflow:visible;
        }
        button{
            z-index:1;
        }
`
const Wrap = styled.div` 
        cursor:pointer;
        img{
            border:2px solid transparent;
            border-radius:5px;
            width:100%;
            height:100%;
            box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            transition-duration : 300ms; 

            &:hover{
                border:4px solid #fff;
            }
        }


`