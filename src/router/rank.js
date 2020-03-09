const Rank = () => import('@/views/Rank')
const Detail = () => import('components/Detail')
export default {
  path: '/rank',
  component: Rank,
  children: [
    {
      path: ':id',
      component: Detail
    }
  ]
}
