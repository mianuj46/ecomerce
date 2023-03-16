import  './Header.css'
import { Fragment } from 'react'
const Header =()=>{
   return (
    <Fragment>
    <div className='header'>
        <div className='main-div'>
        <h1 className='h1'>Home</h1>
        <h1 className='h2'>Store</h1>
        <h1 className='h3'>About</h1>

        </div>
        <div className='cart-div' >Cart <sup>{0}</sup></div>

    </div>
   <div className='para'>
     <h1 className='gen'>The Generics</h1>
   </div>
    </Fragment>
    
   )
}
export default Header