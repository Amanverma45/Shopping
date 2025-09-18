import React,{useState} from 'react'
import { Route ,Routes} from 'react-router-dom'
import Cart from './Component/Cart'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';

function App() {
  const [cart,setcart] = useState([])



  const handleCart = (item) =>{

    let present = false

    cart.forEach(element=>{

      if(element.id === item.id)

        present = true

    })

    if(present){

      alert('already added')

      return

    }

    setcart([...cart,{...item,qty:1}])

  }

 

  return (

    <div>

<Navbar/>
         <Routes>        

         <Route path="/" element={<Home handleCart={handleCart}/>}></Route>
         <Route path="/Cart" element={<Cart cart={cart} setcart={setcart} />} ></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/login" element={<Login/>}></Route>

         

        </Routes>

    </div>

  )

}



export default App;
