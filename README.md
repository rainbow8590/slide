# 简单轮播图插件
    这是一个简单轮播图的插件，可以实现点击左右箭头轮播、点击小圆点轮播、自动轮播和鼠标移入停止移出继续轮播的效果
### 使用
    <script src="jQuery.slide.js"></script>
    $(demo).slide({
        //左箭头类名（id）
        "leftArrow":".leftArr",
        //右箭头类名（id）
        "rightArrow":".rightArr",
        //圆点的类名
        'dotCur':'dot'
    })