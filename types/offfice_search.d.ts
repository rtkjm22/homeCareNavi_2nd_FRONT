import type { AsyncDataOptions, AsyncData } from '#app'
import type { SearchResult } from '@/api/@types'

/** 
 * areaSearch, wordSearch, nearestSearch全共通のフェッチャーの型。
 * フェッチャーの型を全リクエストで統一させることで、動的に異なるフェッチャーを使用できるようにする。
 * */
export type OfficeSearchFetcher = (
    asyncOpts?: AsyncDataOptions<SearchResult> 
  ) => AsyncData<SearchResult, Error | null>