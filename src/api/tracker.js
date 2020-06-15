import axios from 'axios';
import { AsyncStorage } from 'react-native';
//axios:lla apin kanssa keskustelu.
//ngorkilla serverin hostaus:

//1 aja servu local hostiin: npm run dev
//2 avaa ngrokilla localhost portti jossa on servu: ngrok http 3001
//3 päivitä 8h välein!!!!!!!





const instance = axios.create({
    baseURL: 'http://69e489766200.ngrok.io'
})

//eka funktio ajetaan aina ku tehdään request (joka yhdistää tokenin urliin)
//toka aina jos tulee error
instance.interceptors.request.use(
    async (config) => {        //config sisältää tietoa axiosin kutsusta. Lisätään siihen token headeriksi.
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;