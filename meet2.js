
1.improt 和 link 区别
  a.link属于html标签，不仅能用于引入css同时也可以用于定义RSS，定义rel连接属性的作用，但是@import只能用于引用css
  b.两者加载到额时机不同，link在页面加载的同时载入，而@import实在页面记载完才加载
  c.link不会有兼容问题，@import是css2.1 才引入的，所以IE5以上才兼容
  d.link支持js控制dom改变样式，但是@import不支持

2.不同浏览器内核
  浏览器内核主要分为两部分，渲染引擎和js引擎，渲染引擎用于渲染页面内容，js引擎用于解析和执行js实现动态效果
  主流浏览器内核如下：
    TriDent内核：IE,360,搜狐等浏览器
    Gecko内核：火狐浏览器
    Presto内核：Opera浏览器（后来和谷歌一起高了个Blink内核）
    WebKit内核：Safari，chrome(chrome现在为Blink)

3.HTML5有哪些新特性，HTML5的兼容问题如何处理？怎么区分HTML和HTML5？
  a.新增标签：
    绘画canvas
    媒介：video和audio元素
    本地离线储存：长期储存localStorage,浏览器关闭数据不丢失；临时储存sessionStorage，关闭浏览器自动删除
    一些语义化标签：article、footer、header、nav、section
    新增表单控件：calendar、date、time、email、url、search
    新的技术webworker, websocket, Geolocation
  b.如果浏览器不支持h5标签怎么办？
    IE8/IE7/IE6支持通过document.createElement方法产生的标签
    也可以直接使用成熟的框架、比如html5shim;
       <!--[if lt IE 9]>
          <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
       <![endif]-->
  c.如何区分HTML5?
    主要看文档申明，是否含有新增结构元素，是否存在h5的功能元素

4.如何理解HTML语义化？
  该用什么标签就用什么标签，是标题就用H1(2,3,4,5,6)，是头部Header,底部fotter等
  HTML语义化会让页面内容结构化，结构更清晰，便于浏览器和搜索引擎解析
  搜索引擎也是依赖html标记来确定上下文和关键字权重，语义化的html利于seo
  便于代码阅读和理解，便于后期维护

5.HTML5的离线储存技术的理解
      在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，
  如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。
  如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，
  然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，
  就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
  离线的情况下，浏览器就直接使用离线存储的资源。

6.cookies，sessionStorage 和 localStorage 的区别?
      a. cookie是网站为了标明用户身份的而存储在客户端的数据，cookie数据始终在同源http请求中携带，哪怕不需要也会携带，
  在浏览器和服务端来回传递
      b. sessionStorage 和 localStorage是不会自动把数据传给服务端，仅存于本地
      c. 大小上的区别:cookie数据大小限制在4k，但是Storage最大能到5M甚至更大
      d. 有效期的区别：localStorage是一直储存的，即使页面关闭，也会保留
                      sessionStorage是在页面关闭是清除
                      cookie在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

7.如何实现浏览器多个标签页之间的通讯
  WebSocket、SharedWorker；
  也可以调用localstorge、cookies等本地存储方式；
    localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
    我们通过监听事件，控制它的值来进行页面信息通信

8.页面可见性（Page Visibility API） 可以有哪些用途
  通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
  在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放;

9.itle与h1的区别、b与strong的区别、i与em的区别
  title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响;
  strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容;
  i内容展示为斜体，em表示强调的文本;


下面是css面试题
10.对盒子模型的理解
  两种盒子模型：IE盒模型和标准盒模型，都包含几个部分：content(内容),padding(内边距)，border(边框)，margin(外边距)
  注意：IE盒模型的content会把padding和border算进去

11.css优先级
  优先级就近原则，同权重情况下样式定义最近者为准;
  载入样式以最后载入的定位为准;
  优先级为:
       同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
       !important >  id > class > tag
       important 比 内联优先级高

12.css3新特性
  新增一些CSS3选择器，如div>p，p:first-of-type，p:last-of-type，p:nth-of-type(2)
  CSS3 边框（Borders）： border-image	设置所有边框图像的速记属性
                        border-radius	一个用于设置所有四个边框- *-半径属性的速记属性
                        box-shadow	附加一个或多个下拉框的阴影
  CSS3 背景： background-clip	规定背景的绘制区域。
             background-origin	规定背景图片的定位区域。
             background-size	规定背景图片的尺寸。
  渐变。CSS3 定义了两种类型的渐变（gradients）：
            线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
            径向渐变（Radial Gradients）- 由它们的中心定义
  CSS3 文本效果：比如阴影等
  CSS3 转换和变形：transform：适用于2D或3D转换的元素; transform-origin；允许您更改转化元素位置
      2D新转换属性：
        matrix(n,n,n,n,n,n) 定义 2D 转换，使用六个值的矩阵。
        translate(x,y) 定义 2D 转换，沿着 X 和 Y 轴移动元素。
        translateX(n) 定义 2D 转换，沿着 X 轴移动元素。
        translateY(n) 定义 2D 转换，沿着 Y 轴移动元素。
        scale(x,y) 定义 2D 缩放转换，改变元素的宽度和高度。
        scaleX(n) 定义 2D 缩放转换，改变元素的宽度。
        scaleY(n) 定义 2D 缩放转换，改变元素的高度。
        rotate(angle) 定义 2D 旋转，在参数中规定角度。
        skew(x-angle,y-angle) 定义 2D 倾斜转换，沿着 X 和 Y 轴。
        skewX(angle) 定义 2D 倾斜转换，沿着 X 轴。
        skewY(angle) 定义 2D 倾斜转换，沿着 Y 轴。
      3D转换属性：
        transform 向元素应用 2D 或 3D 转换。
        transform-origin 允许你改变被转换元素的位置。
        transform-style  规定被嵌套元素如何在 3D 空间中显示。
        perspective 规定 3D 元素的透视效果。
        perspective-origin 规定 3D 元素的底部位置。
        backface-visibility 定义元素在不面对屏幕时是否可见。
      3D 转换方法：
        matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) 定义 3D 转换，使用 16 个值的 4x4 矩阵。
        translate3d(x,y,z) 定义 3D 转化。
        translateX(x) 定义 3D 转化，仅使用用于 X 轴的值。
        translateY(y) 定义 3D 转化，仅使用用于 Y 轴的值。
        translateZ(z) 定义 3D 转化，仅使用用于 Z 轴的值。
        scale3d(x,y,z) 定义 3D 缩放转换。
        scaleX(x) 定义 3D 缩放转换，通过给定一个 X 轴的值。
        scaleY(y) 定义 3D 缩放转换，通过给定一个 Y 轴的值。
        scaleZ(z) 定义 3D 缩放转换，通过给定一个 Z 轴的值。
        rotate3d(x,y,z,angle) 定义 3D 旋转。
        rotateX(angle)	定义沿 X 轴的 3D 旋转。
        rotateY(angle)	定义沿 Y 轴的 3D 旋转。
        rotateZ(angle)	定义沿 Z 轴的 3D 旋转。
        perspective(n)	定义 3D 转换元素的透视视图。
  CSS3 过渡,过渡属性:
        transition 简写属性，用于在一个属性中设置四个过渡属性。
        transition-property 规定应用过渡的 CSS 属性的名称。
        transition-duration 定义过渡效果花费的时间。默认是 0。
        transition-timing-function 规定过渡效果的时间曲线。默认是 "ease"。
        transition-delay 规定过渡效果何时开始。默认是 0。
  css3动画：要创建CSS3动画，你需要了解@keyframes规则。@keyframes规则是创建动画。 @keyframes规则内指定一个CSS样式和动画将逐步从目前的样式更改为新的样式。
  CSS3 盒模型
  CSS3伸缩布局盒模型(弹性盒)

13.






















本文来自 其實很簡單 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/chandoudeyuyi/article/details/69206236?utm_source=copy














。
  >特别感谢guanghua的分享，本文是拜读大佬文章做的总结，也是对大佬的总结做了精简，留下一些我觉得遇到频率非常高的题。 大佬文章传送门：https://segmentfault.com/a/1190000016504891
