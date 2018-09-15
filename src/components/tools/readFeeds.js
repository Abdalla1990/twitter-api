 import axios from 'axios'
let readFeeds = async (name)=>{

    
    return await axios.get('/search',{params:name});

       
}
export default readFeeds ;