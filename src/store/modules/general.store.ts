// the first argument is a unique id of the store across your application
export const useGeneralStore = defineStore('generalStore', () => {
  const generalLoading = ref(false)

  return {
    generalLoading
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
