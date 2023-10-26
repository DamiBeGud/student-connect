import React, { useEffect, useState,useRef } from 'react'
import {PostWrapper,
    PostTextarea,
    PostUploadActionsWrapper,
    PostUploadInput,
    PostButtonsWrapper,
    PostPostButton,
    PostUploadImage,
    PostUploadVideo,
    PostUploadDocument,
    Wrapper,
    StyledLoadingImage,
    StyledUploadImage,
    StyledImageWrapper} from './styled/StyledPostToBoard'

import {getDownloadURL, ref,uploadBytes} from 'firebase/storage'
import {storage} from '../firebaseConfig' 
import { v4 } from 'uuid';

import useFetch from '../custom-hooks/useFetch';
import useStore from '../zustand/store'

function PostToBoard() {
  const user = useStore((state => state.profile))
  const setProfileBoardAddOne = useStore((state)=> state.setProfileBoardAddOne)
  const postText = useRef()
  const [uploadFile, setUploadFile] = useState('')
  const [fileUrl, setFileUrl] = useState()
  const [loadingImage, setLoadingImage] = useState(false)


    useEffect(()=>{
      if(uploadFile != '') 
    {  const id =  v4()
      const fileRef = ref(storage,`/images/${id}`)
     uploadBytes(fileRef, uploadFile).then((snapshot) => {
      console.log(snapshot)
      getDownloadURL(fileRef)
      .then((url)=>{
        console.log(url)
        setLoadingImage(false)
        setFileUrl(url)
      })
     })}
    },[uploadFile])

    const {fetchPost} = useFetch()

  
  return (
    <>
        <PostWrapper>
            <PostTextarea ref={postText}/>
            {loadingImage && <StyledLoadingImage>Loading</StyledLoadingImage>}
            {fileUrl !== ''? <StyledImageWrapper><StyledUploadImage src={fileUrl} /></StyledImageWrapper>: ''}
                <PostUploadActionsWrapper>
                <PostButtonsWrapper>
                    <PostUploadInput type='file' id='image' accept="jpg, .jpeg, .png" hidden onChange={(e) => {setUploadFile(e.target.files[0]); setLoadingImage(true)} }/>
                    <PostUploadInput type='file' id='video' accept="video/mp4,video/x-m4v,video/*" hidden/>
                    <PostUploadInput type='file' id='document' accept=".doc,.docx,.pdf" hidden/>
                    <PostUploadImage onClick={()=> document.querySelector('#image').click()}/>
                    <PostUploadVideo onClick={()=> document.querySelector('#video').click()}/>
                    <PostUploadDocument onClick={()=> document.querySelector('#document').click()}/>
                </PostButtonsWrapper>
                <Wrapper>
                <PostPostButton onClick={()=>{fetchPost(`http://localhost:8080/boardpost/new/${user.userID}`,{
                  firstname:user.firstname,
                  lastname:user.lastname,
                  postText: postText.current.value,
                  imageUrl:fileUrl
                },setProfileBoardAddOne)}}/>
                </Wrapper>

                

                </PostUploadActionsWrapper>
        </PostWrapper>
    </>
  )
}

export default PostToBoard