export const RECEIVE_CURRENT_MESSAGE = "RECEIVE_CURRENT_MESSAGE";

export const receiveCurrentMessage = (message) => {
  return({
    type: RECEIVE_CURRENT_MESSAGE,
    message
  })
}
