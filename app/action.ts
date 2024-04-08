"use server"

 export const getData = async ()=>{
    try {
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await fetchData.json();
        return res;
    } catch (error) {
        console.log("Error in Fetching Data", error);
    }
    
}