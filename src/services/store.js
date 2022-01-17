import axios from "axios";

const Store = {
    products: () => new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/products')
            .then((result) => {
                
                resolve(result) 
                console.log({ result })
            })            
            .catch((error)=> {
                console.log({ error })
                reject(error)
            })
          
      }),
}
export default Store

