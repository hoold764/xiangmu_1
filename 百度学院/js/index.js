var iconText = new Vue({
    el: ".iconText",
    data: {
        list: [
            { iconUrl: "images/1.jpg", title: "Mobile First", text: "All modulz are built moble-first for maximum device compatibility." },
            { iconUrl: "images/2.jpg", title: "Accessibility", text: "Support for IE8.mobile and tablet devices.screenreaders and color blind." },
            { iconUrl: "images/3.jpg", title: "Fluid Typography", text: "On different screen sizes,fonts automagically scale with the viewport." },
            { iconUrl: "images/4.jpg", title: "Customization", text: "Make any design your own using the Style Editor Personalize fonts colors.and layouts to create the custom look you want." }
        ]
    }
})
var jiaocheng = new Vue({
    el: ".jiaocheng",
    data: {
        list: [
            {imgUrl: "images/ipad-01.jpg",title: "教程",text: "教程是入门的捷径，请从这里开始了解san。"},
            {imgUrl: "images/ipad-02.jpg",title: "指南",text: "我们正在编写指南手册，以指导各种应用场景下怎么使用san。"}
        ]
    }
})
var products = new Vue({
    el: ".products",
    data: {
        list: [
            {fontImgUrl: "images/font-01.jpg",text: "Li Jun, a China Academy of Engineering academician and also director of the alliance's experts' committee, said that China will also launch design guidance for smart cars, smart map architecture and standards for test grounds."},
            {fontImgUrl: "images/font-02.jpg",text: "Li said the smart car industry is able to enlarge the current car industry by 1 trillion yuan ($158.15 billion) and also able to boost fast development in 5G, internet of cars, big data, artificial intelligence and new-energy vehicles."},
            {fontImgUrl: "images/font-03.jpg",text: "Zhang Junyi, a partner with NIO Capital,    said that t he smart car is the trend for the car industry and China's auto sector will usher in a new key development stage with the improvement of infrastructure, technology, policies and laws."}
        ]
    }
})
var awesome = new Vue({
    el: ".awesome",
    data: {
        list: [
            {url: "images/renwu-01.jpg",title: "Ethan Dutton",text: "Senior Visual Designer"},
            {url: "images/renwu-02.jpg",title: "Ethan Dutton",text: "Senior Visual Designer"},
            {url: "images/renwu-03.jpg",title: "Ethan Dutton",text: "Senior Visual Designer"},
            {url: "images/renwu-04.jpg",title: "Ethan Dutton",text: "Senior Visual Designer"}
        ],
        show: false
    }
})
$(function(){
    $('.supportiveBtn input').on("click",function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.awesomeImg>div').on("mouseover",function(){
        $(this).children().addClass('show');
    })
    $('.awesomeImg>div').on("mouseout",function(){
        $(this).children().removeClass('show');
    })
})
