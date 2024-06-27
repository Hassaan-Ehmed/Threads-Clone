
function setlocalStorage(key,value){
    
    if(key){

        localStorage.setItem(key,JSON.stringify(value));
    }

} 

function getlocalStorage(key){

    if(key){

    let item = JSON.parse(localStorage.getItem(key));

        return item; 

    }

} 



export { getlocalStorage, setlocalStorage } ;