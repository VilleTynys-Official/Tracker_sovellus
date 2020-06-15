import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name } } = useContext(LocationContext);


    //täl yhdistetäään monta contextia..

    /**APU FUNKTIO TRÄKKIEN LUOMISEEN
     *@param saveTrack ottaa sisälleen name ja locationin. Tämän jälkeen tallentaa ne apiin.
     * 
     */

    const saveTrack = () => {
        createTrack(name, locations);
    };

    return [saveTrack]; //array, koska tapana on et hookista palautetaan metodit arrayn sisällä.

};