import axios from 'axios';

//axios:lla apin kanssa keskustelu.
//ngorkilla serverin hostaus:

//1 aja servu local hostiin: npm run dev
//2 avaa ngrokilla localhost portti jossa on servu: ngrok http 3001
//3 päivitä 8h välein!!!!!!!

export default axios.create({
    baseURL: 'http://b798367e20af.ngrok.io'
})

