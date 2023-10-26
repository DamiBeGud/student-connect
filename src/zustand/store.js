import { create } from 'zustand'

const useStore = create((set) => ({
  auth: {},
  profile:{},
  profileBoard:[],
  editProfileToggle: false,
  reFetch: 1,
  setReFetch: () => set((state)=> (state.reFetch + 1)),
  setAuth2: (data) => set((state) => ({auth:data})),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  setProfile: (data) => set((state) => ({profile:data})),
  setProfileBoard: (data) => set((state)=>({profileBoard:data})),
  setToggleEditProfileModal: ()=> set((state) => ({editProfileToggle: !state.editProfileToggle}))
  // setProfile2:(data, event) => set((state) => ({profile: {... state.profile, event:state.profile.event}})
}))

export default useStore