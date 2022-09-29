class Pagination {
  // ページネーションに表示するページ数を配列で返す
  private calRange (start: number, end: number): number[] {
    const returnRange = []
    for (let i = start; i <= end; i++) {
      returnRange.push(i)
    }
    return returnRange
  }

  // 現在のページからページネーションで表示するページ数を計算
  public middlePageRange (currentPage: number, lastPage: number, range: number) {
    let start: number
    let end: number

    // 現在のページが最初の場合
    if (currentPage < range - 2) {
      start = 1
      end = range
    } else if (currentPage > lastPage - range + 2) {
      // 現在のページが最後の場合
      start = lastPage - range + 1
      end = lastPage
    } else {
      // 現在のページが中間の場合
      start = currentPage - Math.floor(range / 2)
      end = currentPage + Math.floor(range / 2)
    }
    return this.calRange(start, end)
  }
}

const pagination = new Pagination()

export default defineNuxtPlugin(() => {
  return {
    provide: {
      pagination
    }
  }
})
