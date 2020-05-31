
//"let" let's redifine the function somewhere in future ( vs. const)
//!!! nyt ei käytetty "export default" koska exportataan useita eri funktioita.

import { NavigationActions} from 'react-navigation';


let navigator; //app saa tämän ja välittää sen muille.

export const setNavigator = (nav) => {  //nav tulee react navigationista
    navigator = nav; //annetaan reactin navigointi navigatoriin.
};

//tehdään oma navigate toiminto.
export const navigate = (routeName, params) =>{
    navigator.dispatch(                         
        NavigationActions.navigate({            //navigationActionsin state päivittyy
            routeName,
            params
        })
    );
};