import { useEffect } from "react"
import { useState } from "react"

const Card = () => {
    // https://api.jsonbin.io/v3/b/67485f65e41b4d34e45c3b20
    // const data =[
    //     {
    //         "id" : 1,
    //         "name" :"barger",
    //         "image" :"ddhdhjjg.png",
    //         "price" : "12$",
    //         "discription" : "dufahfhfhfhfhssk",
    //         "catagory" : "dinner"
    //     }
    // ]
    const [data,setdata] =useState([])
    const [maindata ,setMaindata] =useState([])

    useEffect(()=>{
        fetch('https://api.jsonbin.io/v3/b/67495d8aad19ca34f8d26304')
      .then(response => response.json())
      .then(json =>{setdata(json.record) ,setMaindata(json.record)})
    },[])

    const handelcat =(ButtonDAta)=>{
        const fiterButton = data.filter((item)=>{
            return item.category == ButtonDAta
        })
        setMaindata(fiterButton)
    }


  return (
    <>
    <div className="nav py-2 bg-[#D91656]">
    <div className="container">
        <div className="flex justify-between items-center">
        <div className="logo">
            <img className="w-[80px] rounded-full" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" alt="images" />
        </div>
        <ul className="flex gap-4 mr-5">
            <li><button onClick={()=>handelcat("fiterButton")} className="text-xl text-white font-bold ">All</button></li>
            <li><button onClick={()=>handelcat("breakfast")} className="text-xl text-white font-bold ">Breckfast</button></li>
            <li><button onClick={()=>handelcat("lunch")} className="text-xl text-white font-bold ">Lunch</button></li>
            <li><button onClick={()=>handelcat("dinner")} className="text-xl text-white font-bold ">Dinner</button></li>
        </ul>
        </div>
    </div>
    </div>
    <div className="main mt-7 flex gap-4 flex-wrap justify-center mb-6">
        {
            maindata.map((item)=>{
                console.log(item)
                return(
                <div key={item.id} className="single-card h-[200px] w-[350px] flex gap-3 overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                    <div className="img   ">
                        <img className=" w-[200px] h-[200px]" src={item.image} alt="img" />
                    </div>
                    <div className="text">
                        <h1 className="pt-4 text-[16px] font-semibold">Name :{item.name}</h1>
                        <p>Details :{item.description}</p>
                        <h1 className="text-[15px] font-bold">Price :{item.price}</h1>
                        <h1 className="text-16px font-bold">Type :{item.category}</h1>
                    </div>
                </div>
                )
            })
        }
    </div> 
    </>
  )
}

export default Card




