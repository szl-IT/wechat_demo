// pages/home/home.js
const app = getApp();
var that;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        bannerData: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('onLoad');
        this.getBannerData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('onReady');
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
        wx.showLoading({
            title: 'loading',
        });
        wx.request({
            url: app.globalData.baseUrl + 'banner/json',
            method: 'GET',
            dataType: 'json',
            success(res) {
                console.log('success==' + res.data);
                that.setData({ bannerData: res.data.data });
                wx.hideLoading({
                    success: (res) => {
                        console.log('res==' + res.data);
                    },
                })
            },
            fail(e) {
                console.log('fail==' + e.data);
            }
        })
    },

    goCommonWeb: function (event) {
        console.log(event);
        wx.showToast({
            title: '跳转到' + event.currentTarget.dataset.url,
        });
    },
})