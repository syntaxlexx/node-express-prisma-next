import { RouteRule } from '../../../../interfaces/route'

/**
 * @description
 * Is used to compare the route rules from the route file
 * and check if the user has the permission to access the route
 */

const routeRules: RouteRule[] = [
  {
    path: '/api/rules',
    method: 'get',
    rules: [1],
  },
  {
    path: '/api/rules',
    method: 'post',
    rules: [1],
  },
  {
    path: '/api/rules/:id',
    method: 'get',
    rules: [1],
  },
  {
    path: '/api/rules/:id/users',
    method: 'get',
    rules: [1],
  },
  {
    path: '/api/rules/:id',
    method: 'put',
    rules: [1],
  },
  {
    path: '/api/rules/:id',
    method: 'delete',
    rules: [1],
  },
]

export default { routeRules }
