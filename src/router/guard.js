import router from './index'
import { getToken } from '@/utils/auth'


router.beforeEach((to, from, next) => {
    const hasToken = getToken()//getToken()意思是拿到这个里面有没有东西
    //因为他有return，会返回东西的
    if (hasToken) {
        // 如果有token就放行
        if (to.path === '/login') {
            //如果去登录页的话就放行
            next('/')
        } else {
            //不是在登录页的话直接免登录
            next()
        }
    } else {
        if (to.path === '/login') {
            //不是在登录页就不鸟他
            next()
        } else {
            next('/login')
        }
    }
})

// 怎么从getToken中得知有无token？
// getToken（）