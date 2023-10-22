import useStore from "../zustand/store";


const useAuth = (url, swithcAuth)=>{
  const setAuth2 = useStore(state=> state.setAuth2)
  
  
   const handleSubmit = async (data, setAuth)=>{

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      // AUTH SWITCH LOGIC
      if(responseData.registerd){
        swithcAuth(prev=>!prev)
      }
      if(responseData.login){
        setAuth(prev=> !prev)
        setAuth2(responseData)
      }
      console.log('Response Data:', responseData)
    } catch (error) {
      console.error('Error:', error)
    }
   }
   return {handleSubmit}
}

export default useAuth