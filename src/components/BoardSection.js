import React from 'react'
import PostToBoard from './PostToBoard'
import {StyledPostToBoard, StyledBoard} from './styled/StyledBoardSection'
import BoardArticle from './BoardArticle'
import useFetch from '../custom-hooks/useFetch'
import useStore from '../zustand/store'
function BoardSection() {
  const profileID = useStore((state)=>state.auth.id)
  const profileBoard = useStore((state)=> state.profileBoard)
  const setprofileBoard = useStore((state)=> state.setProfileBoard)
  
  useFetch(`http://localhost:8080/profile/boardpost/${profileID}`, setprofileBoard)

  return (
    <>
    <StyledBoard>
    <StyledPostToBoard>
        <PostToBoard></PostToBoard>
    </StyledPostToBoard>
    {profileBoard.map((article)=>{
      return (<BoardArticle key={article._id} data={article}/>)
    })}

    </StyledBoard>
    </>
  )
}

export default BoardSection