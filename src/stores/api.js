import { defineStore } from "pinia";


export const base = defineStore({
    id: "base",
    state: () => ({
        data: null
    })
})