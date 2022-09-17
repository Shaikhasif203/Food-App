import React from 'react'

function Navbar({filteritem,menulist}) {
  return (
    <>
        <nav className='navbar'>
     <div className='btn-group'>

    {

  menulist.map((curr,i)=>{

     return <button className='btn-group__item' onClick={()=>filteritem(curr)}>{curr}</button>

})


    }


      
     </div>
   </nav>
    </>
  )
}

export default Navbar
