export function success(payload) {
  return {
    response: payload,
    jqXHR: {},
    textStatus: 'success'
  }
}

export function error(codeStatus, textStatus, errorThrown) {
  return {
    jqXHR: {
      status: codeStatus
    },
    textStatus: textStatus,
    errorThrown: errorThrown
  }
}