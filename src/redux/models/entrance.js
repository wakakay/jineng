// content
export const SET_ENTRANCE_SCENCE_ID = 'SET_ENTRANCE_SCENCE_ID'
export const SET_ENTRANCE_SCENCE_NAME = 'SET_ENTRANCE_SCENCE_NAME'
export const DROP_ENTRANCE_SCENCE_ID = 'DROP_ENTRANCE_SCENCE_ID'
export const SET_ENTRANCE_QUERY = 'SET_ENTRANCE_QUERY'
export const SET_ENTRANCE_PATH = 'SET_ENTRANCE_PATH'
export const FAILURE = 'FAILURE'

const customErrActionBundle = {
    type: FAILURE,
    payload: {
        status: 'failure',
        response: {},
        error: { message: '错误' }
    } // end payload
}

// sync creators
export const setSceneID = id => ({
    type: SET_ENTRANCE_SCENCE_ID,
    payload: {
        scenceID: id
    }
})

// sync creators
export const setSceneName = name => ({
    type: SET_ENTRANCE_SCENCE_NAME,
    payload: {
        scenceName: name
    }
})

export const setPath = path => ({
    type: SET_ENTRANCE_PATH,
    payload: {
        path
    }
})

export const setQuery = query => ({
        type: SET_ENTRANCE_QUERY,
        payload: {
            query
        }
    })
    // async creators

// handlers
const ACTIONS_HANDLERS = {
    [SET_ENTRANCE_SCENCE_ID]: (entrance, { payload: scenceID }) => {
        return Object.assign({}, entrance, scenceID)
    },
    [SET_ENTRANCE_SCENCE_NAME]: (entrance, { payload: scenceName }) => {
        return Object.assign({}, entrance, scenceName)
    },
    [DROP_ENTRANCE_SCENCE_ID]: (entrance, action) => Object.assign({}, entrance, { scenceID: '' }),
    [SET_ENTRANCE_PATH]: (entrance, { payload: path }) => {
        wx.setStorage({
            key: 'entrancePath',
            data: path.path
        })
        return Object.assign({}, entrance, path)
    },
    [SET_ENTRANCE_QUERY]: (entrance, { payload: query }) => {
        return Object.assign({}, entrance, query)
    }
}

// reducer
export const entranceReducer = (entrance = {
    scenceID: '',
    path: '',
    query: '',
    mappers: {

        1001: '发现栏小程序主入口',
        1005: '顶部搜索框的搜索结果页',
        1006: '发现栏小程序主入口搜索框的搜索结果页',
        1007: '单人聊天会话中的小程序消息卡片',
        1008: '群聊会话中的小程序消息卡片',
        1011: '扫描二维码',
        1012: '长按图片识别二维码',
        1013: '手机相册选取二维码',
        1014: '小程序模版消息',
        1017: '前往体验版的入口页',
        1019: '微信钱包',
        1020: '公众号 profile 页相关小程序列表',
        1022: '聊天顶部置顶小程序入口',
        1023: '安卓系统桌面图标',
        1024: '小程序 profile 页',
        1025: '扫描一维码',
        1026: '附近小程序列表',
        1027: '顶部搜索框搜索结果页“使用过的小程序”列表',
        1028: '我的卡包',
        1029: '卡券详情页',
        1030: '自动化测试下打开小程序',
        1031: '长按图片识别一维码',
        1032: '手机相册选取一维码',
        1034: '微信支付完成页',
        1035: '公众号自定义菜单',
        1036: 'App 分享消息卡片',
        1037: '小程序打开小程序',
        1038: '从另一个小程序返回',
        1039: '摇电视',
        1042: '添加好友搜索框的搜索结果页',
        1043: '公众号模板消息',
        1044: '带 shareTicket 的小程序消息卡片（详情)',
        1047: '扫描小程序码',
        1048: '长按图片识别小程序码',
        1049: '手机相册选取小程序码',
        1052: '卡券的适用门店列表',
        1053: '搜一搜的结果页',
        1054: '顶部搜索框小程序快捷入口',
        1056: '音乐播放器菜单',
        1057: '钱包中的银行卡详情页',
        1058: '公众号文章',
        1059: '体验版小程序绑定邀请页',
        1064: '微信连Wi-Fi状态栏',
        1067: '公众号文章广告',
        1068: '附近小程序列表广告',
        1071: '钱包中的银行卡列表页',
        1072: '二维码收款页面',
        1073: '客服消息列表下发的小程序消息卡片',
        1074: '公众号会话下发的小程序消息卡片',
        1078: '连Wi-Fi成功页',
        1089: '微信聊天主界面下拉',
        1090: '长按小程序右上角菜单唤出最近使用历史',
        1092: '城市服务入口'
    }
}, action) => {
    const handler = ACTIONS_HANDLERS[action.type]
    return handler ? handler(entrance, action) : entrance
}
