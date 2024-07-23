import {  useNav } from '@slidev/client'
import { TocItem } from '@slidev/types'

import { toValue, computed} from 'vue'

export interface Breadcrumb {
  title?: string
  slideNo: number
}

export const useBreadcrumbs = () => {
  const { tocTree, currentPage } = useNav()
  
  const getBreadcrumbCollection = (items: TocItem[], breadcrumb: Breadcrumb[] = [], acc = new Map<number, Breadcrumb[]>()) => {
    items.forEach(({title, children, no}) => {
      const currentCrumb: Breadcrumb[] = [...breadcrumb, {title: title || "", slideNo: no}]
      acc.set(no, currentCrumb) 

      if (children.length > 0) {
        return getBreadcrumbCollection(children, currentCrumb, acc)
      }
    })

    return acc
  }


  const breadcrumbCollections = getBreadcrumbCollection(toValue(tocTree))
  
  const breadcrumbSlidesNo = Array.from(breadcrumbCollections.keys())

  return computed(() => {
    const match = breadcrumbSlidesNo.find((slideNo, index) => {
      return currentPage.value === slideNo || (slideNo < currentPage.value && breadcrumbSlidesNo[index + 1] > currentPage.value)
    })

    return breadcrumbCollections.get(match || breadcrumbSlidesNo[0]) as Breadcrumb[]
  })
}