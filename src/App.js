import React, { Component } from "react";
import MyMenu from "./menu";

class Item extends Component {
 render() {
   const items = [
     {
       name: "Cereales con chocolate",
       description: "Cereales rellenos de chocolate",
       quantity: 2,
       category: "Cereales",
       price: 5
     },
     {
       name: "Hamburguesa con queso",
       description: "Hamburguesa rica y saludable",
       quantity: 1,
       category: "Fast-food",
       price: 15
     },
     {
       name: "Agua mineral",
       description: "Agua de un charco del Himalaya",
       quantity: 2,
       category: "Bebida",
       price: 5
     }
   ];
   return (
     <div className="App">
       <ul>
         {items.map(function(menu) {
           return (
            <li>
             <MyMenu name={menu.name}
             description={menu.description}
             quantity={menu.quantity}
             quacategory={menu.category}
             price={menu.price}/>
           </li>
           );
         })}
       </ul>
     </div>
   );
 }
}
export default Item;