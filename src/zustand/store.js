import { create } from 'zustand'
import {produce} from "immer"

const useStore = create((set) => ({
  auth: {},
  profile:{},
  profileBoard:[],
  editProfileToggle: false,

  setAuth2: (data) => set((state) => ({auth:data})),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  setProfile: (data) => set((state) => ({profile:data})),
  setProfileBoard: (data) => set((state)=>({profileBoard:data})),
  setProfileBoardAddOne: (data) => set((state)=>({profileBoard:[data,...state.profileBoard]})),
  setProfileBoardComment: (data) => { set(produce((state=>{
    const post = state.profileBoard.find((el)=> el._id === data.postID)
    // post.comments = [...post.comments, data.data]
    // for(let i =0 ; i<= state.profileBoard; i++){
    //   console.log(state.profileBoard[i])
    // }
    // console.log(`zustand`,post)
    post.comments = [...post.comments, data.data]
  })))

    
  },
  setToggleEditProfileModal: ()=> set((state) => ({editProfileToggle: !state.editProfileToggle}))
  // setProfile2:(data, event) => set((state) => ({profile: {... state.profile, event:state.profile.event}})
}))

export default useStore