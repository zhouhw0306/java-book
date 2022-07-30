// pages/dowork/dowork.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {

        data : '',
        // data : {
        //     qsType : '单选题',
        //     question : '线性表的顺序存储结构是一种（  ）的存储结构',
        //     optionA : '随机存取',
        //     optionB : '顺序存取',
        //     optionC : '索引存取',
        //     optionD : '散列存取',
        //     result : 'A',
        //     analysis : '暂无解析'
        // },
        youOption : '空', //用户选择的选项
        flag : '',  
        end : false, //是否显示答案
        first : true, //该题是否第一次提交
        total : 50 //题库数量
    },


    submit(e){

        if(this.data.first){
            this.setData({
                youOption : e.target.dataset.option,
                first : false
            })
            //判断是否回答正确
            if(e.target.dataset.option == this.data.data.result){
                this.setData({
                    flag : '1',
                    end :  true
                })
                return
            }
            this.setData({
                flag : '-1',
                end :  true
            })
        }
    },


    next(){
        let num = Math.floor(Math.random()*this.data.total)
        db.collection("bank").skip(num).limit(1).get({
            success : res=>{
                this.setData({
                    data : res.data[0],
                    youOption : '空', //用户选择的选项
                    flag : '',  
                    end : false, //是否显示答案
                    first : true //该题是否第一次提交
                })
            } 
        }) 
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    //只在第一次加载时打开
    onLoad(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    //每次刷新这个页面都加载
    onShow() {
        //console.log(123)
        db.collection("bank").count()
        .then(res=>{
            this.setData({
                total : res.total
            })
        })  
        this.next()
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