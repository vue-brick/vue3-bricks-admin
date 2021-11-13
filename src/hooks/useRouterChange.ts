


// 路由列表
let routerList = ["/install", '/lText', '/flyBox', '/echartContainer',
    '/wellContainer', '/monacoEditor', '/time','/numbers','/scrollList']

// 返回对应的下标即menu的key
const useRouterChange = (index: number, routerLists: any) => {
    routerList = routerLists.map((rou: any) => {
        return rou.path
    })
    if (routerList[index] != null) {
        return `${routerList[index]}`
    }
    return '/'
}

const useReturnMenKey = (ele: string) => {
    return routerList.indexOf(ele) ? routerList.indexOf(ele) : 0
}

export {useRouterChange, useReturnMenKey}
