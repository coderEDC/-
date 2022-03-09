import instance from './service'

export function get (url,params){

        const config = {
            method:'get',
            url,
        }
        if (params) {
            config.params=params
        }
        return  instance(config)
        //创了一个get函数，有两个参，
        //内部创了一个config，里面有个外部get传里的url
        //再返回 => instance.config这个方法  后面可以then
}

export function post(url,data) {
    const config = {
        method:'post',
        url,
    }
    if (data) {
        config.data=data
    }
    return instance(config)
}