
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

11.





。
  >特别感谢guanghua的分享，本文是拜读大佬文章做的总结，也是对大佬的总结做了精简，留下一些我觉得遇到频率非常高的题。 大佬文章传送门：https://segmentfault.com/a/1190000016504891
