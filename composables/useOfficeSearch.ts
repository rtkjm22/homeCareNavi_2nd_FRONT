import type { Ref } from 'vue'

export const useOfficeSearch = () => {
  const { $api } = useNuxtApp()

  const useAreaSearch = (areas: string, page: Ref<number>) => {
    return useAsyncData(
      `areaSearch?areas=${areas}&page=${page}`,
      () => $api.client.api.v1.client.offices.area_search.$get({
        query: {
          areas,
          page: page.value
        }
      })
    )
  }

  return {
    useAreaSearch
  }
}
