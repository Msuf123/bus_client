async function fetchGet(url){
    const res=await fetch(url)
    return await res.json()
}
export default fetchGet