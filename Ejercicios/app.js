import { getUserById } from "./modulo.js";

let user =getUserById(78, function(error,user) {
   if (error) {
    console.log(error);
   }else if(user){
    console.log(user);

   }

   
    
});

