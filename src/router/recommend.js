const Recommend = () => import('@/views/Recommend')
const Detail = () => import('components/Detail')
export default {
  path: '/recommend',
  component: Recommend,
  children: [
    {
      path: ':id',
      component: Detail
    }
  ]
  // 别名
  // alias: ['/hao', '/haoge']
}
