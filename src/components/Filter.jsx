import React,{useState} from 'react'
import { useFilter } from '../context/FilterContext';

function Filter() {
    const [value,setValue] = useState(5000)

    const filter = {
      category: [
        {
          type: "radio",
          name: "category",
          value: "PlayStation",
          title: "PlayStation",
        },
        {
          type: "radio",
          name: "category",
          value: "XBOX",
          title: "XBOX",
        },
        {
          type: "radio",
          name: "category",
          value: "Nintendo",
          title: "Nintendo Switch",
        },
        {
          type: "radio",
          name: "category",
          value: "PC",
          title: "PC/Desktop",
        },
      ],
      sortByPrice: [
        {
          type: "radio",
          name: "sortByPrice",
          value: "lowToHigh",
          title: "Price Low to High",
        },
        {
          type: "radio",
          name: "sortByPrice",
          value: "hightToLow",
          title: "Price High to Low",
        },
      ],
      sortByRating: [
        {
          type: "radio",
          name: "sortByRating",
          value: "5",
          title: "5 Star",
        },
        {
          type: "radio",
          name: "sortByRating",
          value: "4",
          title: "4 Star and Above",
        },
        {
          type: "radio",
          name: "sortByRating",
          value: "3",
          title: "3 Star and Above",
        },
      ],
      sortByDiscount: [
        {
          type: "radio",
          name: "sortByDiscount",
          value: "50",
          title: "50% and Above",
        },
        {
          type: "radio",
          name: "sortByDiscount",
          value: "40",
          title: "40% and Above",
        },
        {
          type: "radio",
          name: "sortByDiscount",
          value: "30",
          title: "30% and Above",
        },
        {
          type: "radio",
          name: "sortByDiscount",
          value: "20",
          title: "20% and Above",
        },
        {
          type: "radio",
          name: "sortByDiscount",
          value: "10",
          title: "10% and Above",
        },
      ],
      priceRange: [
        {
          type: "range",
          name: "priceRange",
          min: "0",
          max: "100000",
          value: value,
          step: "1000",
        },
      ],
      sortByAccessoriesType: [
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "Controller",
          title: "Controllers",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "Headset",
          title: "Headsets",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "Racing Wheel",
          title: "Racing Wheels",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "Streaming Devices",
          title: "Streaming Devices",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "VR",
          title: "VR",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "Thumb Grips",
          title: "Thumbs Grip",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "Cases and Covers",
          title: "Cases And Covers",
        },
        {
          type: "radio",
          name: "sortByAccessoriesType",
          value: "International Brands",
          title: "International Brands",
        },
      ],
      sortByBrands: [
        {
          type: "radio",
          name: "sortByBrands",
          value: "EA",
          title: "EA",
        },
        {
          type: "radio",
          name: "sortByBrands",
          value: "Sony",
          title: "Sony",
        },
        {
          type: "radio",
          name: "sortByBrands",
          value: "RockStar",
          title: "RockStar",
        },
        {
          type: "radio",
          name: "sortByBrands",
          value: "Warner Bros",
          title: "Warner Bros",
        },
        {
          type: "radio",
          name: "sortByBrands",
          value: "Marvel",
          title: "Marvel",
        },
        {
          type: "radio",
          name: "sortByBrands",
          value: "Ubisoft",
          title: "Ubisoft",
        },
      ],
    };
    const { state,dispatch } = useFilter()

    const rangeHanlder = (e) => {
      setValue(e.target.value)
      changeFilter(e)
    }

    const changeFilter =(e) => {
      dispatch({ type: e.target.name, payload: e.target.value });
    }
    
     return (
       <aside className="filter">
         <div className="flex flex-jc-space-between flex-ai-center px-x-small flex-wrap column-gap-small">
           <h2>Filter</h2>
           <button
             className="btn btn_secondary_outline"
             name="clear"
             value="clear"
             onClick={changeFilter}
           >
             Clear
           </button>
         </div>
         <ul className="non_bullet_list">
           <h3>Category</h3>
           {filter.category &&
             filter.category.map((element) => {
               if (element.value === state.category) {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                       checked
                     />
                     {element.title}
                   </li>
                 );
               } else {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                     />
                     {element.title}
                   </li>
                 );
               }
             })}
         </ul>
         <ul className="non_bullet_list">
           <h3>Sort By Price</h3>
           {filter.sortByPrice &&
             filter.sortByPrice.map((element) => {
               if (element.value === state.sortByPrice) {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                       checked
                     />
                     {element.title}
                   </li>
                 );
               } else {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                     />
                     {element.title}
                   </li>
                 );
               }
             })}
         </ul>
         <ul className="non_bullet_list">
           <h3>Sort By Rating</h3>
           {filter.sortByRating &&
             filter.sortByRating.map((element) => {
               if (element.value === state.sortByRating) {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                       checked
                     />
                     {element.title}
                   </li>
                 );
               } else {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                     />
                     {element.title}
                   </li>
                 );
               }
             })}
         </ul>
         <ul className="non_bullet_list">
           <h3>Sort By Discount</h3>
           {filter.sortByDiscount &&
             filter.sortByDiscount.map((element) => {
               if (element.value === state.sortByDiscount) {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                       checked
                     />
                     {element.title}
                   </li>
                 );
               } else {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                     />
                     {element.title}
                   </li>
                 );
               }
             })}
         </ul>
         <ul className="non_bullet_list">
           <h3>Price Range</h3>
           {filter.priceRange &&
             filter.priceRange.map((element) => {
               return (
                 <li className="flex">
                   <input
                     key={element.name}
                     type={element.type}
                     name={element.name}
                     min={element.min}
                     max={element.max}
                     step={element.step}
                     value={value}
                     onChange={rangeHanlder}
                   />
                   <span>{value}</span>
                 </li>
               );
             })}
         </ul>
         <ul className="non_bullet_list">
           <h3>Sort By Accessories Type</h3>
           {filter.sortByAccessoriesType &&
             filter.sortByAccessoriesType.map((element) => {
               if (element.value === state.sortByAccessoriesType) {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                       checked
                     />
                     {element.title}
                   </li>
                 );
               } else {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                     />
                     {element.title}
                   </li>
                 );
               }
             })}
         </ul>
         <ul className="non_bullet_list">
           <h3>Brands</h3>
           {filter.sortByBrands &&
             filter.sortByBrands.map((element) => {
               if (element.value === state.sortByBrands) {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                       checked
                     />
                     {element.title}
                   </li>
                 );
               } else {
                 return (
                   <li>
                     <input
                       key={element.name}
                       type={element.type}
                       name={element.name}
                       value={element.value}
                       onChange={changeFilter}
                     />
                     {element.title}
                   </li>
                 );
               }
             })}
         </ul>
       </aside>
     );
}

export default Filter