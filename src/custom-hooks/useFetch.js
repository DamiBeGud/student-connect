import { useEffect } from "react"


const useFetch = (url, setZustand) =>{
    
 
    const fetchPost = async (url, data) =>{
        try {  
            const response = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
            const responseData = await response.json()
            console.log('Response data', responseData)

            

            
        } catch (error) {
            console.error('Error', error)
        }
    }
    useEffect(()=>{
 
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then( data => {
            console.log('Data:', data)
            setZustand(data)
            
            
  })
  .catch(error => {
    console.error('Error:', error)
  });
  },[])

  return {fetchPost}
}

export default useFetch