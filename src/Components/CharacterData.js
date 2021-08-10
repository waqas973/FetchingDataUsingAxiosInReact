import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function CharacterData({query}) {
    const [item , setImg] = useState([]);

    useEffect(()=>{
       const getData = async function(){
        const res = await  axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
           setImg(res.data);
           
       }
       
       getData();  
    },[query]);
  
    return (
         <ImagesGallery >
            {
               item.map(({img,name})=>{ 
                  return  <ContentDiv>
                              <img src={img} alt='' />
                               <Info>
                                    {name}
                               </Info>
                           </ContentDiv>  
                })   
            }
         </ImagesGallery>
     
    )
}

export default CharacterData;

 const ImagesGallery = styled.div`
width: 90vw;
display: flex;
justify-content: center;
flex-wrap: wrap;
border: 1px solid whitesmoke;
background-color: whitesmoke;
box-shadow: 2px -1px 10px rgba(0,0,0,0.15),-2px 1px 10px rgba(0,0,0,0.15);
overflow-y: scroll;
height:80vh;
 `;
const ContentDiv =styled.div`
height: 300px;
 width: 20%;
 border: 3px solid white;
 margin: 10px;
 box-shadow: 2px -1px 10px rgba(0,0,0,0.1),-2px 1px 10px rgba(0,0,0,0.1);
> img {
    flex:1;
   width: 100%;
   height: 250px;
   
 }
 @media (max-width: 992px) {
    width: 33.33%;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
 
`;
const Info =styled.div`
 text-align: center;
 font-weight: bold;
 padding-top: 5px;
 padding-left: 10px;
 padding-right: 10px;
`;