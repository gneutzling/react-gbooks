import { defineAction } from 'redux-define'

export const createAction = actionName =>
  defineAction(actionName, ['ERROR', 'PENDING', 'SUCCESS'])
