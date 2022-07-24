// pages/detail/detail.js
//const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList : ""

    },

    getData(){
        
    },

    toSubDetail(e){
        wx.navigateTo({
          url: '../detailSub/detailSub?_id='+e.target.dataset._id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //使用云函数规避单次查询20条的限制
        wx.cloud.callFunction({
            name:"getDataDetail",
            data:{
                type : parseInt(options.type)
            }
        }).then(res =>{
            this.setData({
                dataList : res.result.data
            })
        })

        // db.collection("topicList").where({type : parseInt(options.type)}).get({
        //     success : res=>{
        //         this.setData({
        //             dataList : res.data
        //         })
        //     }
        // })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
       
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})