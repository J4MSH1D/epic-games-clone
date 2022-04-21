import { defineStore } from "pinia";
import axios from "axios";

const link = import.meta.env.VITE_API_LINK

const host = import.meta.env.VITE_API_HOST

const key = import.meta.env.VITE_API_KEY

export const base = defineStore({
  id: "base",
  state: () => ({
    data: null,
  }),
  actions: {
    async getData() {
      try {
        const response = await axios.get(link+"?key="+key)
        this.data = response.data.results;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
