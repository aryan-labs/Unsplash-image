import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import './index.css'
import { useQuery } from 'react-query'
import { StoreContext } from './context'

const url='https://api.unsplash.com/search/photos?client_id=k7LCwYvgGe1NFBTE8x4NlaeDjZexyeI9R_A6s-693Ao'

const Gallery = () => {
  const {searchItem,setSearchItem}=useContext(StoreContext)
    const response=useQuery({
       queryKey:['images',searchItem], queryFn:async ()=>{
            const result= await axios.get(`${url}&query=${searchItem}`);
          return result.data
        }
            
        
    })
    if(response.isLoading){
        return (
        <h4>...Loading</h4>
    )}

   
 const results=response.data.results;
 console.log(results)
    if(results.length<1)(
    <div>
      <h4>NO results found</h4>
    </div>
  )
return (
    <div className='results'>
        {
            results.map((item)=>{

                const url=item?.urls?.regular;
                
             
                return (
                   <div className=''>
                <img className='results-img' src={url} key={item.id} alt={item.alt_description}/>
                  </div>
               )
                
            })
      
        }
       
    </div>
)

}

export default Gallery
