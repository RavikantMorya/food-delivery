import React, { useEffect } from 'react'
import { Header,MainContainer,CreateContainer } from './Components'
import { Route,Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

const App = () => {

  const [{foodItems},dispatch]=useStateValue();

  //fetch the data when our project is loaded
  const fetchData=async () =>{
    await getAllFoodItems().then(
      (data)=>{
        
        dispatch(
          {
            type:actionType.SET_FOOD_ITEMS,
            foodItems:data,
          }
        )
      }
    )
  }

  //call the fetchdata function to load the data
    useEffect(
      ()=>{
        fetchData();
      },[]
    );

  return (

    <AnimatePresence exitBeforeEnter>
    <div className=' w-screen h-auto flex flex-col  '>
      <Header />
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'> 
        <Routes>
          <Route path="/" element={<MainContainer />  }/>
          <Route path="/createItem" element={<CreateContainer />  }/>
        </Routes>
       </main>
    </div>
    </AnimatePresence>
  )
}

export default App
