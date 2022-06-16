import { RouteRule } from '../../../../interfaces/route'

/**
 * @description
 * Is used to compare the route rules from the route file
 * and check if the user has the permission to access the route
 */

const routeRules: RouteRule[] = [
  {
    path: '/api/business',
    method: 'get',
    rules: [1],
  },
  {
    path: '/api/business',
    method: 'post',
    rules: [1],
  },
  {
    path: '/api/business/:id',
    method: 'get',
    rules: [1],
  },
  {
    path: '/api/business/:id/users',
    method: 'get',
    rules: [1],
  },
  {
    path: '/api/business/:id',
    method: 'put',
    rules: [1],
  },
  {
    path: '/api/business/:id',
    method: 'delete',
    rules: [1],
  },
]

export default { routeRules }
