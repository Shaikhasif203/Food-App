import React from 'react'

function Menu_card({menudata}) {
    console.log(menudata)



  return (


    <>
<div className='main-card--cointainer'>
   {

menudata.map((curr,i)=>{

    const {id,image,name,category,price,description} = curr

    return <div className='card-container' key={id}>
    <div className='card'>
    <div className='card-body'>

    <span className='card-number card-circle subtle'>{id}</span>

    <span className='card-author subtle'>{category}</span>

    <h2 className="card-title"> {name} </h2>

    <span className="card-description subtle">
{description}                </span>

<span className="card-description subtle">
{price}                </span>

                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />

                <span className="card-tag  subtle">Order Now</span>
      
      </div>

   
    
  </div>



})


   }

</div>



    </>
  )
}

export default Menu_card
