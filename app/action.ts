"use server"

 export const getData = async ()=>{
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await fetchData.json();
    return res;
}