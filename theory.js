// 拖拽原理
运用事件:
mousedown:
    元素绑定
mousemove:
    document绑定
mouseup:
    document绑定

流程:

当鼠标的按下的时候计算鼠标的clientX,clientY和元素的offsetLeft,offsetTop的差值dXis,dYis,
绑定document mousemove 和 mouseup事件

当鼠标移动的时候计算鼠标的clientX,clientY分别和dXis,dYis相减并赋值给拖拽的元素的left,和top坐标值

当鼠标mouseup的时候解除document的mousemove和mouseup事件

注意事项:

    不要把mousemove和mouseup绑定到被拖拽元素上面因为这样有可能当鼠标mousedown元素后快速移开的话
    被触发的元素会指向document.
    
示例:


// 获取隐藏元素的style
Method1:获取目标元素的不可见的父元素.通过克隆然后扩展$.fn.width(及其它的如outerWidth)来计算元素的style再删除掉克隆元素
Method2:把目标元素的父元素设置为show然后再去获取

