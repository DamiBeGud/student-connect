import React from 'react'
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

import {PostPostButton} from './styled/StyledPostToBoard'

function BoardArticle() {
  return (
    <>
    <StyledBoardArticle>
        <StyledBoardArticleHeader>
            <StyledBoardArticleHeaderProfile onClick={()=> console.log('Clicked Profile')}>
                <StyledBoardArticleHeaderProfileImage src='https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww&w=1000&q=80' />
                <StyledBoardArticleHeaderProfileName>Damjan Mlinaric</StyledBoardArticleHeaderProfileName>
            </StyledBoardArticleHeaderProfile>
        </StyledBoardArticleHeader>
        <StyledBoardArticleBody>
            <StyledArticleText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
             invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
               sanctus est Lorem ipsum dolor sit amet.
            </StyledArticleText>
            <StyledArticleImage src='https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww&w=1000&q=80'/>
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
                <StyledCommentWrapper>
                    <StyledCommentProfileImage src='https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww&w=1000&q=80'/>
                    <StyledComment>
                    <StyledCommentName>Damjan Mlinaric</StyledCommentName>
                    <StyledCommentText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                     eirmod tempor invidunt ut labore et dolore magna aliquyam
                    </StyledCommentText>
                    </StyledComment>
                </StyledCommentWrapper>
                <StyledNewCommentWrapper>
                    <StyledNewCommentInput type='text' placeholder='Comment....'/>
                    <StyledCommentButton />
                </StyledNewCommentWrapper>
            </StyledArticleCommentSection>
        </StyledBoardArticleFooter>

    </StyledBoardArticle>
    </>
  )
}

export default BoardArticle
