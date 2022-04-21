import { defineStore } from 'pinia'

export const useUser = defineStore({
  id: 'user',
  state: () => ({
    user: null
  })
})
