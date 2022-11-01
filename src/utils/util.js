// 返回路由路径
export function getRedirectTo(usertype, header) {
    let path = ''
    if (usertype === 'laoban') {
        path = '/laoban'
    } else {
        path = '/dashen'
    }
    if (!header) {
        // 没有值，去完善信息界面
        path += 'info'
    }
    return path
}