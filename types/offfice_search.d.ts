import type { Ref } from 'vue'
import type { AsyncDataOptions, AsyncData } from '#app'
import type { Methods } from '@/api/api/v1/client/offices/area_search'

type OfficeSearchResponse = Methods['get']['resBody']

/** 
 * areaSearch, wordSearch, nearestSearch全共通のフェッチャーの型。
 * フェッチャーの型を全リクエストで統一させることで、動的に異なるフェッチャーを使用できるようにする。
 * */
export type OfficeSearchFetcher = (
    page: Ref<number>, 
    asyncOpts?: AsyncDataOptions<OfficeSearchResponse> 
  ) => AsyncData<OfficeSearchResponse, Error | null>