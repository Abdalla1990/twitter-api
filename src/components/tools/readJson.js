import axios from 'axios'
let readJson = async ()=>await axios('./accounts.json');
export default readJson ;