import { photographersListFactory } from "./photographers-list/photographers-list-factory.js";
import { apiFishEye } from "../../server/services/client.js";

export const photographersFactory = () => {
    const render = () => {
        apiFishEye('public/json/api.json').then((data) => {
            let dataPhotographers = data.photographers;
            
            dataPhotographers.map(( el ) => {    
                photographersListFactory(el);
            });
        }).catch(() => {
            console.error('Failed to load ApiFishEye');
        })  
    }
   
    return render();
}