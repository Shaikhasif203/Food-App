import React from 'react'
import './style.css'
import Menu from '../Menuapi'
import { useState } from 'react'
import Menu_card from './Menu_card'
import Navbar from './Navbar'


const uniquelist = [...new Set(Menu.map((current)=>{
return current.category

})),"All"


]
// console.log(uniquelist);


function Resturant() {

  const [menudata, Setmenudata] = useState(Menu);
  const [menulist, Setmenulist] = useState(uniquelist);


 const filteritem = (category)=> {
  
  if(category === "All"){
    Setmenudata(Menu);
    return

  }


  const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
  });

  Setmenudata(updatedList);

};

 




return (
   <>    

 

  <Navbar filteritem={filteritem} menulist={menulist}/>

   <Menu_card menudata={menudata}/>
    </>

  )
}

export default Resturant
