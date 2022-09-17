import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg?quality=85&w=800" alt="" />
      </Background>
      <ImageTitle>
        <img src = "https://o.remove.bg/downloads/4a89b389-d6ef-446f-bd8b-4b128d24f9bf/download-removebg-preview.png" alt = "" />
      </ImageTitle>
      <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>

          </PlayButton>
          <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>

          </TrailerButton>
          <AddButton>
              <span>+</span>

          </AddButton>
          <GroupwatchButton>
             <img src = "/images/group-icon.png" alt = "" />
          </GroupwatchButton>
      </Controls>
      <SubTitle>
        2018 + 7m + Faimly, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        A chinease mom who's sad when her grown son leaves home get another chance at motherhood when one of her dumping spring to life. But she find that nothng stay cute and small forever
      </Description>
    </Container>
  )
}

export default Detail
const Container = styled.div` 
    min-height:calc(100vh-70px);
    padding:0 clac(5vw + 5px);
    position:relative;

`


const Background = styled.div`
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index:-1;
      opacity:0.8;

      img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
`

const ImageTitle = styled.div`
      height:30vh;
      min-height:170px;
      width:35vw;
      min-width:200px;


      img{
        width:100%;
        height:100%;
        object-fit:contain;
      }

`


const Controls = styled.div`
      display:flex;
      align-items:center;


`


const PlayButton = styled.button`
        border-radius:4px;
        font-size:15px;
        display:flex;
        align-items:center;
        height:56px;
        background-color: rgb(249,249,249);
        border:none;
        padding:0px 24px;
        margin-right:24px;
        margin-left:35px;
        letter-spacing:1.8px;
        cursor:pointer;
        text-transform:uppercase;

      &:hover{
        background-color:rgb(198,198,198);
      }


`
const TrailerButton = styled(PlayButton)`
        background-color: rgb(0,0,0,0.3);
        border:1px solid rgb(249,249,249);
        color:rgb(249,249,249);
        text-transform:uppercase;

`

const AddButton = styled.button`

          width:44px;
          height:44px;
          margin-right:16px;
          display:flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            border:2px solid white;
            background-color:rgb(0,0,0,0.6);
            cursor:pointer;
          span{
            font-size:30px;
            color:white;


          }

`
const GroupwatchButton = styled(AddButton)`
          background-color:rgb(0,0,0);
`


const SubTitle = styled.div` 
      color : rgb( 249, 249, 249);
      font-size:15px;
      min-height:20px;
      margin-top:26px;
      margin-left:35px;
`

const Description = styled.div `
        line-height:1.4;
        font-size:20px;
        margin-top:16px;
        margin-left:35px;
        color: rgb(249,249,249);
`