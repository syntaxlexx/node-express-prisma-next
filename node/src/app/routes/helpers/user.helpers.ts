import { RouteRule } from '../../../../interfaces/route'

/**
 * @description
 * Is used to compare the route rules from the route file
 * and check if the user has the permission to access the route
 */

const routeRules: RouteRule[] = [
  {
    path: '/api/users',
    method: 'get',
    rules: [1, 2, 3],
  },
  {
    path: '/api/users',
    method: 'post',
    rules: [1, 2, 3],
  },
  {
    path: '/api/users/:id',
    method: 'get',
    rules: [1, 2, 3],
  },
  {
    path: '/api/users/:id/business',
    method: 'get',
    rules: [1, 2, 3],
  },
  {
    path: '/api/users/:id',
    method: 'put',
    rules: [1, 2, 3],
  },
  {
    path: '/api/users/:id',
    method: 'delete',
    rules: [1, 2, 3],
  },
]

export default { routeRules }
