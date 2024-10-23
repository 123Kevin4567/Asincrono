import { asignaciones,users } from "./data.js";

export function getUserById(id, callback) {
    const user = users.find(function(user) {
        return user.id === id;
    });
    
    if (!user) {
        return `Lo siento, no se encontró ningún usuario con el ID ${id}. Por favor, intenta con otro ID entre 1 y ${users.length}`;
    }
    
    callback(null,user)
}