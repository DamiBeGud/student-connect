import React, { useEffect, useRef, useState } from 'react'
import { StyledMain } from '../components/styled/StyledMain'
import ProfileSection from '../components/ProfileSection'
import useStore from "../zustand/store";
import useFetch from '../custom-hooks/useFetch'
import Modal from '../components/Modal';
import EditProfileModal from '../components/EditProfileModal';



function MyBoard() {
  const auth = useStore(state=> state.auth)
  const setZustand = useStore(state=> state.setProfile)
  const profile = useStore(state=> state.profile)
  const toggleEditProfileModal = useStore(state=>state.editProfileToggle)
  const setToggleEditProfileModal = useStore(state => state.setToggleEditProfileModal)

  const [profileState, setProfileState] = useState(profile)

  useFetch(`http://localhost:8080/profile/${auth.id}`, setZustand, profile)

const {fetchPost} = useFetch()


  
  return (
    <>
    <StyledMain>
        <ProfileSection></ProfileSection>
        {toggleEditProfileModal && 
        <Modal 
          modalName="Edit Profile"
          body={<EditProfileModal 
            state = {profileState}
            setState = {setProfileState}
          />}
          save={fetchPost}
          saveURL = {`http://localhost:8080/profile/update/${auth.id}`}
          saveData= {profileState}
          closeModal={setToggleEditProfileModal}
        />}
    </StyledMain>

    </>
  )
}

export default MyBoard