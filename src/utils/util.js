// 返回路由路径
export function getRedirectTo(type, header) {
    let path = ''
    if (type === 'laoban' ) {
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