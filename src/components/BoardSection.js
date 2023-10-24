import React from 'react'
import PostToBoard from './PostToBoard'
import {StyledPostToBoard, StyledBoard} from './styled/StyledBoardSection'
import BoardArticle from './BoardArticle'

function BoardSection() {
  return (
    <>
    <StyledBoard>
    <StyledPostToBoard>
        <PostToBoard></PostToBoard>
    </StyledPostToBoard>
    <BoardArticle />

    </StyledBoard>
    </>
  )
}

export default BoardSection