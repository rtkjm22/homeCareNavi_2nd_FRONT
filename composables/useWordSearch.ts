import type { OfficeSearchFetcher } from '~~/types/offfice_search'

/**
 * - words 検索文字列。半角及び全角空白で区切るとAND検索
 * - page ページネーションのページ番号
 */
type WordSearchParams = {
  words: string;
  page: number;
}

export const useWordSearch = () => {
  const route = useRoute()
  const { $api } = useNuxtApp()

  /** 単語検索のurl文字列を返す */
  const buildWordSearchUrl = ({ words, page }: WordSearchParams) => {
    return `/offices?words=${words}&page=${page}`
  }

  /** 単語検索用のクエリパラメータを取得する */
  const getWordSearchParams = (): WordSearchParams => {
    const words = route.query.words as string
    const page = Number.parseInt(route.query.page as string)
    
    return { words, page }
  }

  /** 現在のurlが単語検索の形式の場合trueを返す */
  const isCurrentUrlWordSearch = () => {
    const { words, page } = getWordSearchParams()
    return (words != null && page != null)
  }

  /** 単語検索実行メソッド */
  const useAsyncWordSearch: OfficeSearchFetcher = (page, asyncOpts?) => {
    const { words } = getWordSearchParams()

    return useAsyncData(
      `wordSearch?words=${words}&page=${page.value}`,
      () => $api.client.api.v1.client.offices.word_search.$get({
        query: {
          words,
          page: page.value
        }
      }),
      asyncOpts
    )
  }

  return {
    buildWordSearchUrl,
    getWordSearchParams,
    isCurrentUrlWordSearch,
    useAsyncWordSearch
  }
}
