export const fetchAllUsers = async(URL)=>{
    let users = null;
    fetch(URL)
    .then( (res)=>{
      if(!res.ok){
        throw Error("could not fetch")
      }
      return res.json()
    })
    .then( (data)=>{
      users = data.data;
      return users;
    })
   
    
  }