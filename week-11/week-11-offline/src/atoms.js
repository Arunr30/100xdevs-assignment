import { atom, selector } from "recoil";

export const homeAtom = atom({
    key: "homeAtom",
    default: 100
})

export const notification = atom({
    key: "Notification",
    default: 12
})

export const message = atom({
    key: "message",
    default: 0
})

export const jobs = atom({
    key: "jobs",
    default: 2
})

export const totalValueCount = selector({
    key: "totalValue",
    get : ({get}) => {
        const homeCount = get(homeAtom)
        const notificationCount = get(notification)
        const messageCount = get(message)
        const jobsCount = get(jobs)
        return homeCount + notificationCount + messageCount + jobsCount;
    }
})