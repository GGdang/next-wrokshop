export type Seat = {
  id: number
  branchName: string
  areaName: string
  floorName: string
  totalCount: number
  freeCount: number
  areaId: number
  updatedAt: Date
}

export type ActionResult<T> = {
  success: boolean
  data?: T
  error?: string
}
