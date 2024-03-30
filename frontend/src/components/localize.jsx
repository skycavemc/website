import { useState, useEffect } from "react";
import stringtable from '../stringtable.json';

function Localize({ str }) {
    const [data, setData] = useState("");

    useEffect(() => {
        const languageTag = navigator.language;
        const languageCode = languageTag.split('-')[1]; 


        if (stringtable && stringtable[str] && stringtable[str][languageCode]) {
            setData(stringtable[str][languageCode]);
        } else if (stringtable && stringtable[str] && stringtable[str].Original) {
            setData(stringtable[str].Original);
        } else {
            console.error(`Could not find localization for "${str}"`);
            console.log(languageCode);
        }
    }, [str]);

    
    return data;
}

export default Localize;
