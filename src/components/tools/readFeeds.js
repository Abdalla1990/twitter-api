import axios from 'axios';
let readFeeds = async (name)=>await axios.get('/search',{params:name});
export default readFeeds ;