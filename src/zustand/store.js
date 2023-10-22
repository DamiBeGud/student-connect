import { create } from 'zustand'

const useStore = create((set) => ({
  auth: {},
  profile:{},
  editProfileToggle: false,
  setAuth2: (data) => set((state) => ({auth:data})),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  setProfile: (data) => set((state) => ({profile:data})),
  setToggleEditProfileModal: ()=> set((state) => ({editProfileToggle: !state.editProfileToggle}))
  // setProfile2:(data, event) => set((state) => ({profile: {... state.profile, event:state.profile.event}})
}))

export default useStore