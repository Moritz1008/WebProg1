import {defineStore} from "pinia";

export const useEANstore = defineStore('EAN', {
    state: () => ({
        Gegenstände: [
            {Bild: "", EAN: "0", Name: "Wasserflasche"},
            {Bild: "", EAN: "0", Name: "Kreide"},
            {Bild: "", EAN: "88250273034007", Name: "Paket"}
        ],
        currEAN: 0
    }),
    actions: {
        //normale Funktionen, die auf den Store zugreifen können
        compareEAN() {
            console.log("wird compared")
            for (let x in this.Gegenstände){
                if (this.currEAN == this.Gegenstände.EAN){
                    console.log("Rückgabewert: " + this.Gegenstände.EAN)
                    return x
                }
            }
            console.log("Rückgabewert 0")
            return 0
        },
        setCurrEAN(newEAN) {
            this.currEAN = newEAN
            console.log("Neue EAN in Store: " + this.currEAN)
            console.log("Wird in setter compared")
            this.compareEAN()
        },
    },
    getters: {
        getStoreEAN(state) {
            console.log("EAN wurde geholt")
            return state.EAN
        }
    }
    }
)