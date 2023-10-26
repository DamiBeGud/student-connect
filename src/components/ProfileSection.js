import React from 'react'


import { StyledProfileImage,StyledProfileWrapper,StyledProfileImageWrapper, StyledProfileSection, StyledProfileFullName,StyledProfileDescription, StyledProfileEditButtonInline, StyledProfileEditButton} from '../components/styled/StyledProfileSection'


import {FlexConteiner} from './styled/FlexConteiner'

import {StyledAboutMeWrapper, StyledAboutMeHeading, StyledAboutMeParagraph, StyledAboutMeSpanWrapper ,StyledAboutMeSpan} from './styled/StyledProfileSectionAboutMe'

import {StyledAboutMeFriends,
    StyledAboutMeFriendWrapper,
    StyledAboutMeFriendImage,
    StyledAboutMeFriendName,
    StyledSeeMoreButton,
    StyledAboutMeFriendsWrapper} from './styled/StyledProfileSectionAboutMe'

    import useStore from "../zustand/store";

function ProfileSection() {
  const profile = useStore(state=> state.profile)
  const setToggleEditProfileModal = useStore(state => state.setToggleEditProfileModal)



  // console.log(profile)
  return (
    <StyledProfileSection>
        <StyledProfileWrapper>
            <StyledProfileImageWrapper >
                <StyledProfileImage src='https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww&w=1000&q=80' />
            </StyledProfileImageWrapper>
            <div>
            <StyledProfileFullName>
            {profile.firstname} {profile.lastname}
            
            </StyledProfileFullName>
            
                <StyledProfileDescription>
                  {profile.description != null ? profile.description : <StyledProfileEditButtonInline>Click to add</StyledProfileEditButtonInline>}
                </StyledProfileDescription>
            </div>
        </StyledProfileWrapper>

{/* 
************************************************************************************************************************************************************************************
************************************************************************************************************************************************************************************
************************************************************************************************************************************************************************************

                                                       ADD ACTIONS ELEMENT THAT WILL BE DIFFERENT FOR MY BOARD AND VISITING ANOTHER PROFILE

************************************************************************************************************************************************************************************
************************************************************************************************************************************************************************************
************************************************************************************************************************************************************************************ */}


            <StyledProfileEditButton onClick={()=>setToggleEditProfileModal()}>Edit Profile</StyledProfileEditButton>
            <StyledProfileEditButton onClick={()=>setToggleEditProfileModal()}>Change Profile Picture</StyledProfileEditButton>
            
        <StyledAboutMeWrapper>
        <StyledAboutMeHeading>About me</StyledAboutMeHeading>
        <StyledAboutMeParagraph>From {profile.cityFrom != null ? profile.cityFrom : <StyledProfileEditButtonInline>Click to add</StyledProfileEditButtonInline>}</StyledAboutMeParagraph>
        <StyledAboutMeParagraph>Born in {profile.cityBorn != null ? profile.cityBorn : <StyledProfileEditButtonInline>Click to add</StyledProfileEditButtonInline>}{profile.countryBorn != null ? `, ${profile.countryBorn}` : ''}</StyledAboutMeParagraph>
        <StyledAboutMeParagraph>Date of birth  {profile.dateOfBirth != null ? profile.dateOfBirth : <StyledProfileEditButtonInline>Click to add</StyledProfileEditButtonInline>}</StyledAboutMeParagraph>
        <StyledAboutMeParagraph>Studys {profile.universityMajor != null ? profile.universityMajor : <StyledProfileEditButtonInline>Click to add</StyledProfileEditButtonInline>}{profile.universityName != null ? ` at ${profile.universityName}` : ''}</StyledAboutMeParagraph>
        <br />
        <StyledAboutMeHeading>Intrests</StyledAboutMeHeading>
        <FlexConteiner>
          <StyledAboutMeParagraph>Sports: 
            </StyledAboutMeParagraph>
            <StyledAboutMeSpanWrapper>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
              <StyledAboutMeSpan>Basketball</StyledAboutMeSpan>
            </StyledAboutMeSpanWrapper>
        </FlexConteiner>
        <FlexConteiner>
          <StyledAboutMeParagraph>Movies: 
            </StyledAboutMeParagraph>
            <StyledAboutMeSpanWrapper>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
              <StyledAboutMeSpan>Scary Movie</StyledAboutMeSpan>
            </StyledAboutMeSpanWrapper>
        </FlexConteiner>
        <FlexConteiner>
          <StyledAboutMeParagraph>Music: 
            </StyledAboutMeParagraph>
            <StyledAboutMeSpanWrapper>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
              <StyledAboutMeSpan>Volbeat</StyledAboutMeSpan>
            </StyledAboutMeSpanWrapper>
        </FlexConteiner>
        <StyledAboutMeHeading>Friends: </StyledAboutMeHeading>

        <StyledAboutMeFriendsWrapper>
        <StyledAboutMeFriends>
            <StyledAboutMeFriendWrapper>
                <StyledAboutMeFriendImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'/>
                <StyledAboutMeFriendName>Sam Jilma</StyledAboutMeFriendName>
            </StyledAboutMeFriendWrapper>
            <StyledAboutMeFriendWrapper>
                <StyledAboutMeFriendImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'/>
                <StyledAboutMeFriendName>Sam Jilma</StyledAboutMeFriendName>
            </StyledAboutMeFriendWrapper>
            <StyledAboutMeFriendWrapper>
                <StyledAboutMeFriendImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'/>
                <StyledAboutMeFriendName>Sam Jilma</StyledAboutMeFriendName>
            </StyledAboutMeFriendWrapper>
            <StyledAboutMeFriendWrapper>
                <StyledAboutMeFriendImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'/>
                <StyledAboutMeFriendName>Sam Jilma</StyledAboutMeFriendName>
            </StyledAboutMeFriendWrapper>
            <StyledAboutMeFriendWrapper>
                <StyledAboutMeFriendImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'/>
                <StyledAboutMeFriendName>Sam Jilma</StyledAboutMeFriendName>
            </StyledAboutMeFriendWrapper>
            <StyledAboutMeFriendWrapper>
                <StyledAboutMeFriendImage src='https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg'/>
                <StyledAboutMeFriendName>Sam Jilma</StyledAboutMeFriendName>
            </StyledAboutMeFriendWrapper>
        </StyledAboutMeFriends>
        <StyledSeeMoreButton>See more</StyledSeeMoreButton>
    </StyledAboutMeFriendsWrapper>


        


      </StyledAboutMeWrapper>
    </StyledProfileSection>
  )
}

export default ProfileSection