import requestMock from '@/utils/requestMock'

export function login(data) {
  return requestMock({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return requestMock({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return requestMock({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
