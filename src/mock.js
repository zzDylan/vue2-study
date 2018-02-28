const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('api/goods', (req, res) => {
    return [
                {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
            ]
})

Mock.mock('api/banners', (req, res) => {
    return [
                {img: "http://static.ydcss.com/uploads/ydui/1.jpg", href:"https://www.baidu.com"},
                {img: "http://static.ydcss.com/uploads/ydui/2.jpg", href:"https://www.baidu.com"},
                {img: "http://static.ydcss.com/uploads/ydui/3.jpg", href:"https://www.baidu.com"},
            ]
})