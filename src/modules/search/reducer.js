import { SEARCH_BOOK } from './action-types'

const INITIAL_STATE = {}

export const search = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SEARCH_BOOK.PENDING:
      return {
        ...state,
        pending: true,
      }

    case SEARCH_BOOK.ERROR:
      return {
        ...state,
        pending: false,
      }

    case SEARCH_BOOK.SUCCESS:
      return {
        ...state,
        items: payload.items,
        pending: false,
      }

    default:
      return state
  }
}
