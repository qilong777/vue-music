const Singer = () => import('views/Singer')
const Detail = () => import('components/Detail')

export default {
  path: '/singer',
  component: Singer,
  children: [
    {
      path: ':id',
      component: Detail
    }
  ]
}
