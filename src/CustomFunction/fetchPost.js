async function  fetchPost(url,{userName,email,password}){
  console.log(userName,email,password)
  return await  fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userName,email,password})}).then(async (response)=>{
         
        return await response.json()
    
     }).catch((e)=>{
         return [e]
     })
}
export {fetchPost}