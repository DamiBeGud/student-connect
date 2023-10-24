import React from 'react'
import {PostWrapper, PostTextarea, PostUploadActionsWrapper, PostUploadInput,PostButtonsWrapper, PostPostButton, PostUploadImage, PostUploadVideo, PostUploadDocument,Wrapper} from './styled/StyledPostToBoard'

function PostToBoard() {
  return (
    <>
        <PostWrapper>
            <PostTextarea />
                <PostUploadActionsWrapper>
                <PostButtonsWrapper>
                    <PostUploadInput type='file' id='image' accept="jpg, .jpeg, .png" hidden/>
                    <PostUploadInput type='file' id='video' accept="video/mp4,video/x-m4v,video/*" hidden/>
                    <PostUploadInput type='file' id='document' accept=".doc,.docx,.pdf" hidden/>
                    <PostUploadImage onClick={()=> document.querySelector('#image').click()}/>
                    <PostUploadVideo onClick={()=> document.querySelector('#video').click()}/>
                    <PostUploadDocument onClick={()=> document.querySelector('#document').click()}/>
                </PostButtonsWrapper>
                <Wrapper>
                <PostPostButton />
                </Wrapper>

                </PostUploadActionsWrapper>
        </PostWrapper>
    </>
  )
}

export default PostToBoard