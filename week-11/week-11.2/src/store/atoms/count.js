import { atom, selector } from "recoil";

export const counter = atom({
    key: "count",
    default: 0
    
})

export const evenCounter = selector({
    key: "evencounter",
    get: function({get}) {
        const count = get(counter)
        return count % 2 === 0
    }
})