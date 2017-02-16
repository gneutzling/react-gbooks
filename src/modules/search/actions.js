import http from '../../utils/http-client'
import API from '../../config/api'
import { SEARCH_BOOK } from './action-types'

export const search = term => (
  dispatch => {
    dispatch({
      type: SEARCH_BOOK.PENDING,
    })

    return (
      http.get(`${API.API_URL}?q=${term}`)
        .then(response => {
          dispatch({
            type: SEARCH_BOOK.SUCCESS,
            payload: response,
          })
        }, err => {
          dispatch({
            type: SEARCH_BOOK.ERROR,
            payload: err,
            error: true,
          })
        })
    )
  }
)
