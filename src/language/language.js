import * as language from '../language/string'
const local = localStorage.getItem('local') || 'en';

export default class Lang {
    constructor(){
        this.local = local;
    }

    get(key) {
        if(key){
            if(language[this.local]){
                if(language[this.local][key]){
                    return language[this.local][key];
                } else {
                    return `!---Wrong Key:${key}---!`
                }
            } else {
                if(language['en'][key]){
                    console.error('Language: local was not found using English instate.');
                    return language[this.local][key];
                } else {
                    return `!---Wrong Language:${this.local} and Key${key}---!`;
                }
            }
        }
        return `key is required!`;
    }

    convertNumber(payload){
        try{
            if(payload && language[this.local] && language[this.local]['numbers']){
                let numArr = Array.from(payload.toString());
                let en = [48,49,50,51,52,53,54,55,56,57];
                let bn = [2534,2535,2536,2537,2538,2539,2540,2541,2542,2543];
                let newLocalNumbers = numArr.map( n => {
                    if(n.charCodeAt(0) <= 57 && n.charCodeAt(0) >= 48 && this.local !== 'en'){
                        return String.fromCharCode(bn[en.indexOf(n.charCodeAt(0))]);
                    }  else if(n.charCodeAt(0) <= 2534 && n.charCodeAt(0) >= 2543 && this.local !== 'bn'){
                        return String.fromCharCode(en[bn.indexOf(n.charCodeAt(0))]);
                    }
                    return n;
                });
                return newLocalNumbers.join('');
            }
            return payload;
        } 
        catch(err){
            console.error(err);
        }
        return payload;
    }

}