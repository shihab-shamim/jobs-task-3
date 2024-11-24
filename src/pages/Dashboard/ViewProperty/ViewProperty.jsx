import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

const ViewProperty = () => {
  const properties = [
    {
      propertyLink: "https://i.ibb.co.com/4jGYqqN/pexels-binyaminmellish-186077.jpg",
      propertyName: "Rosewood Manor",
      propertyType: "House",
      rentalDate: "2024-11-26",
      rentalDesc: "Competently network error-free e-services with flexible collaboration and.",
      rentalPrice: "500",
      rentalStatus: "Available"
    },
    {
      propertyLink: "https://i.ibb.co.com/s5MqtgM/pexels-binyaminmellish-106399.jpg",
      propertyName: "Silver Creek Cottage",
      propertyType: "Apartment",
      rentalDate: "2024-11-26",
      rentalDesc: "Intrinsicly formulate holistic ideas rather than tactical innovation.",
      rentalPrice: "600",
      rentalStatus: "Available"
    },
  ];
  
  const [items,setItems]=useState([])
  const [property,setProperty]=useState([])

  useEffect(()=>{
    const value = localStorage.getItem('properties');
  if (value) {
    
    const parsedItems = JSON.parse(value);
    setItems([...properties,...parsedItems]); 
    setProperty([...properties,...parsedItems])
  }
    console.log(value)

  },[])

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()

    const onSubmit=(data)=>{
      const {propertyType}=data
      if(propertyType==='Apartment'){
        const aprt=property.filter(item=>item.propertyType==='Apartment')
        setItems(aprt)
      }
      if(propertyType==='House'){
        const house=property.filter(item=>item.propertyType==='House')
        setItems(house)
      }
      if(propertyType==='Commercial'){
        const commer=property.filter(item=>item.propertyType==='Commercial')
        setItems(commer)
      }
      


    }
  return (
    <div>
      <h2
        data-aos="flip-left"
        data-aos-duration="1500"
        className="md:text-5xl font-semibold text-4xl text-center md:my-5 my-3 uppercase"
      >
        View All Property
      </h2>
      <div className="w-[200px] card bg-base-100 shadow-xl p-8 ml-6 md:ml-56">
        <h1 className="card-title flex justify-center items-center">Check In</h1>
        <p className="flex justify-center items-center">{property.length}</p>
      </div>
<form  onSubmit={handleSubmit(onSubmit)} className="">
<div className="form-control w-full md:my-2 ml-10">

              <div className="label ">
                <span className="label-text"> Types of ways to filter</span>
              </div>
             <div className="flex gap-8">
             <select
                {...register("propertyType",)}
                className="select select-bordered w-1/2"
              >
                <option value="" disabled selected>
                  Select a Property Type
                </option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
              </select>
              
              <button className="btn w-16">Filter</button>
             </div>
            </div>
            
</form>
    

      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        className="grid md:grid-cols-3 grid-cols-1 gap-4 md:m-10 m-3"
      >
      {
  items.map((item, index) => (
    <div key={index} className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={item.propertyLink} 
          alt={item.propertyName} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.propertyName}</h2> 
        <p>Rental Type : {item.propertyType}</p> 
        <div className="card-actions  justify-end">
          <p className="font-bold">Rental Price : {item.rentalPrice} $</p>
          <p className="font-bold text-yellow-700">Rental Status : {item.rentalStatus} </p>
        </div>
      </div>
    </div>
  ))
}
        
       
       
      </div>
    </div>
  )
}

export default ViewProperty
