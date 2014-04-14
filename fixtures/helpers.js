export function successful(payload) {
  return {
    response: payload,
    jqXHR: {},
    textStatus: 'success'
  }
}