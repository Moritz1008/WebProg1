import {defineStore} from "pinia";

export const useEANstore = defineStore('EAN', {
    state: () => ({
        Gegenstände: [
            {Bild: "", EAN: "0", Name: "Wasserflasche"},
            {Bild: "", EAN: "4059549000152", Name: "Kreide"},
            {Bild: "", EAN: "88250273034007", Name: "Paket"}
        ],
        currEAN: 0,
        show: 0,
    }),
    actions: {
        //normale Funktionen, die auf den Store zugreifen können
        compareEAN(state) {
            console.log("wird compared")
            var ArrLen = this.Gegenstände.length
            for (var i = 0; i < ArrLen; i++){
                if (this.currEAN == this.Gegenstände[i].EAN){
                    console.log("Rückgabewert: " + this.Gegenstände[i].EAN)
                    return this.Gegenstände[i]
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
        setShow(newShow) {
            this.show = newShow
            console.log("Neues Show: " + this.show)
        }
    },
    getters: {
        getStoreEAN(state) {
            console.log("EAN wurde geholt")
            return state.EAN
        },
        getStoreShow(state) {
            console.log("Show wurde geholt")
            return state.show
        }
    }
    }
)