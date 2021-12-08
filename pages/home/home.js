// pages/home/home.js
const app = getApp();
const createRecycleContext = require('miniprogram-recycle-view')
import api from '../api/api.js';
import urlLocal from '../api/url_service.js';
var that;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        bannerData: [],
        swipper_show: false,
        recycleList: [{
            "apkLink": "",
            "audit": 1,
            "author": "",
            "canEdit": false,
            "chapterId": 502,
            "chapterName": "自助",
            "collect": false,
            "courseId": 13,
            "desc": "",
            "descMd": "",
            "envelopePic": "",
            "fresh": true,
            "host": "",
            "id": 20766,
            "link": "https://juejin.cn/post/7038889096848080927",
            "niceDate": "4小时前",
            "niceShareDate": "4小时前",
            "origin": "",
            "prefix": "",
            "projectLink": "",
            "publishTime": 1638929222000,
            "realSuperChapterId": 493,
            "selfVisible": 0,
            "shareDate": 1638929222000,
            "shareUser": "吊儿郎当",
            "superChapterId": 494,
            "superChapterName": "广场Tab",
            "tags": [

            ],
            "title": "2021本来想着闲鱼翻身，结果呢？粘锅了......................",
            "type": 0,
            "userId": 2554,
            "visible": 1,
            "zan": 0
        }, {
            "apkLink": "",
            "audit": 1,
            "author": "",
            "canEdit": false,
            "chapterId": 510,
            "chapterName": "大厂分享",
            "collect": false,
            "courseId": 13,
            "desc": "",
            "descMd": "",
            "envelopePic": "",
            "fresh": true,
            "host": "",
            "id": 20756,
            "link": "https://juejin.cn/post/7038598170439319559",
            "niceDate": "14小时前",
            "niceShareDate": "14小时前",
            "origin": "",
            "prefix": "",
            "projectLink": "",
            "publishTime": 1638893918000,
            "realSuperChapterId": 509,
            "selfVisible": 0,
            "shareDate": 1638893696000,
            "shareUser": "鸿洋",
            "superChapterId": 510,
            "superChapterName": "大厂对外分享",
            "tags": [

            ],
            "title": "Android手游SDK换肤方案",
            "type": 0,
            "userId": 2,
            "visible": 1,
            "zan": 0
        },]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('onLoad');
        this.getBannerData();
        this.getArticalListData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('onReady');
        var ctx = createRecycleContext({
            id: 'recycleId',
            dataKey: 'recycleList',
            page: this,
            itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
                width: 162,
                height: 182
            }
        });
        ctx.append(newList)
        // ctx.update(beginIndex, list)
        // ctx.destroy()
    },
    itemSizeFunc: function (item, idx) {
        return {
            width: 162,
            height: 182
        }
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('onPullDownRefresh');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log('onReachBottom');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log('onShareAppMessage');
    },

    getBannerData: function () {
        that = this
        var obj = {
            method: 'GET',
            showLoading: true,
            url: 'banner/json'
        }
        api.request(obj).then((res) => {
            console.log('success11==' + JSON.stringify(res.data));
            that.setData({ bannerData: res.data.data });
        }).catch((e) => {
            console.log('faile==' + e);
        });
    },

    goCommonWeb: function (event) {
        console.log(event);
        wx.showToast({
            title: '跳转到' + event.currentTarget.dataset.url,
        });
        wx.navigateTo({
            url: '/pages/common_web/common_web?url=' + event.currentTarget.dataset.url,
        })
    },

    getArticalListData: function () {
        var obj = {
            method: 'GET',
            showLoading: true,
            url: urlLocal.top_artical,
        }
        api.request(obj).then((res) => {
            console.log('success22==' + JSON.stringify(res.data));
            that.setData({
                recycleList: res.data.data
            })
        }).catch((e) => {

        })
    }

})