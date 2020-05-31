import axios from 'axios';

//axios:lla apin kanssa keskustelu.
//ngorkilla serverin hostaus:

//1 aja servu local hostiin
//2 avaa ngrokilla localhost portti jossa on servu.
//3 päivitä 8h välein!!!!!!!

export default axios.create({
    baseURL: 'http://3da397825ad5.ngrok.io'
})

