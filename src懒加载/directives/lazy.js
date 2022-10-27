export default {
  mounted(el) {
    const imgSrc = el.src
    console.log('el', el);
    const observer = new IntersectionObserver(([isInterSecting]) => {
      //~ 元素会在出现可视区域和离开可视区域时触发这个回调函数
      console.log('触发');
      if (isInterSecting) {
        //加载图片
        el.src = imgSrc
      }
      observer.unobserve(el)
    })
    observer.observe(el)
  }
}