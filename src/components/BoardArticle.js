import React,{useRef} from 'react'
import {StyledBoardArticle,
    StyledBoardArticleHeader,
    StyledBoardArticleHeaderProfile,
    StyledBoardArticleHeaderProfileImage,
    StyledBoardArticleHeaderProfileName,
    StyledBoardArticleBody,
    StyledArticleText,
    StyledArticleImage,
    StyledBoardArticleFooter,
    StyledArticleFooterActions,
    StyledArticleFooterActionButton,
    StyledLikeIcon,
    StyledCommentIcon,
    StyledArticleCommentSection,
    StyledComment,
    StyledCommentProfileImage,
    StyledCommentWrapper,
    StyledCommentName,
    StyledCommentText,
    StyledNewCommentWrapper,
    StyledNewCommentInput,
    StyledCommentButton} from './styled/StyledBoardArticle'

import useFetch from '../custom-hooks/useFetch'

function BoardArticle({data}) {
    const comment = useRef()
    const {fetchPost} = useFetch()
    
const {
    _id,
    userID,
    firstname,
    lastname,
    postText,
    imageUrl,
    comments
} = data
  return (
    <>
    <StyledBoardArticle>
        <StyledBoardArticleHeader>
            <StyledBoardArticleHeaderProfile onClick={()=> console.log(userID, _id)}>
                <StyledBoardArticleHeaderProfileImage src='https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww&w=1000&q=80' />
                <StyledBoardArticleHeaderProfileName>{firstname} {lastname}</StyledBoardArticleHeaderProfileName>
            </StyledBoardArticleHeaderProfile>
        </StyledBoardArticleHeader>
        <StyledBoardArticleBody>
            <StyledArticleText>{postText}</StyledArticleText>
            <StyledArticleImage src={imageUrl}/>
        </StyledBoardArticleBody>
        <StyledBoardArticleFooter>
            <StyledArticleFooterActions>
                <StyledArticleFooterActionButton>
                    <StyledLikeIcon /><StyledArticleText>Like</StyledArticleText> 
                </StyledArticleFooterActionButton>
                <StyledArticleFooterActionButton onClick={()=> console.log('comments')}>
                    <StyledCommentIcon /> <StyledArticleText>Comment</StyledArticleText> 
                </StyledArticleFooterActionButton>
            </StyledArticleFooterActions>
            <StyledArticleCommentSection>
                {
                    comments.map((comment, index)=>{
                        const{
                            userID,
                            firstname,
                            lastname,
                            profileImgUrl
                        } = comment
                        return(

                    <StyledCommentWrapper key={index}>
                    <StyledCommentProfileImage src={profileImgUrl}/>
                    <StyledComment>
                    <StyledCommentName>{firstname} {lastname}</StyledCommentName>
                    <StyledCommentText>{comment.comment}</StyledCommentText>
                    </StyledComment>
                </StyledCommentWrapper>
                        )
                    })
                }
                <StyledNewCommentWrapper>
                    <StyledNewCommentInput type='text' placeholder='Comment....' ref={comment}/>
                    <StyledCommentButton onClick={()=>{fetchPost(`http://localhost:8080/boardpost/comment/new/${userID}/${_id}`,{
                        userID: userID,
                        firstname:firstname,
                        lastname:lastname,
                        comment:comment.current.value,
                        profileImgUrl:'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww&w=1000&q=80'
                    });comment.current.value = ""}}/>
                </StyledNewCommentWrapper>
            </StyledArticleCommentSection>
        </StyledBoardArticleFooter>

    </StyledBoardArticle>
    </>
  )
}

export default BoardArticle
