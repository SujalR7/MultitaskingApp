const todokey='TaskTodo'
export const getLocaleStorage=()=>{
const rawtodos=localStorage.getItem(todokey);
if(rawtodos)return JSON.parse(rawtodos);
else return[];
}
export const setLocaleStorage=(task)=>{
    return localStorage.setItem(todokey,JSON.stringify(task)); 
}