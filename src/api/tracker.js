import axios from 'axios';

//axios:lla apin kanssa keskustelu.
//ngorkilla serverin hostaus:

//1 aja servu local hostiin: npm run dev
//2 avaa ngrokilla localhost portti jossa on servu: ngrok http 3000
//3 päivitä 8h välein!!!!!!!

export default axios.create({
    baseURL: 'http://537d4a56b548.ngrok.io/'
})

