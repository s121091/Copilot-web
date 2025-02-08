/* 设置全局样式 */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #D7D6D4, #F6F6F6);
    overflow-x: hidden; /* 防止水平滚动 */
}

/* 模糊背景 */
.blur-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px); /* 高斯模糊背景 */
    z-index: -1;
}

/* 导航栏样式 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(10px);
    padding: 10px 20px; /* 增加左右内边距 */
    box-sizing: border-box; /* 确保padding不会影响宽度 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

.nav-links {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    margin-left: 100px; /* 根据需要调整左边距 */
}

.contact-icons {
    display: flex;
    gap: 15px;
    margin-right: 100px; /* 根据需要调整右边距 */
}

.nav-links li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}


.contact-icons a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease; /* 渐变效果 */
}

.contact-icons a:hover {
    color: #EEDECD; /* 悬停时变色 */
}

/* 背景圆形样式 */
.circles-container {
    position: absolute; /* 让小球随页面滚动 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none; /* 让背景元素不可点击 */
}

.circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.7;
}

.circle-large {
    top: 10vh;
    right: 10%;
    width: 200px;
    height: 200px;
    background: linear-gradient(to right, #A8997B, #DCCDAE); /* 渐变色 */
}

.circle-small-black {
    top: 700px;
    left: 150px;
    width: 100px;
    height: 100px;
    background-color: black;
}

.circle-smallest-white {
    top: 725px;
    left: 200px;
    width: 50px;
    height: 50px;
    background-color: white;
    animation: orbit 5s linear infinite; /* 旋转动画 */
    transform-style: preserve-3d;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* 发光效果 */
}

@keyframes orbit {
    from {
        transform: rotateY(0deg) translateZ(90px) rotateY(0deg);
    }
    to {
        transform: rotateY(360deg) translateZ(90px) rotateY(-360deg);
    }
}

/* 主容器样式 */
.container {
    text-align: center;
    color: #1A1A1A;
    margin-top: 70px; /* 增加 margin 以将元素下移，考虑导航栏高度 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh; /* 确保容器占据足够高度 */
}

h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border: none;
    background-color: #C2BFB5;
    color: white;
    border-radius: 25px;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #A9A59E; /* 悬停时按钮变色 */
}

.icon {
    width: 24px;
    height: 24px;
    fill: #1A1A1A;
    margin-right: 10px;
}

/* 锚点元素样式 */
#Favourite-anchor {
    display: block;
    height: 0;
    margin-top: -70px; /* 根据导航栏高度调整偏移量 */
    visibility: hidden;
}

/* 卡片容器样式 */
.card-container {
    display: flex;
    flex-direction: column; /* 纵向排列行 */
    align-items: center;
    gap: 20px;
    margin-top: 80px;
}

.card-row {
    display: flex;
    gap: 20px;
}

/* 其他样式保持不变... */

/* 卡片样式 */
.card {
    width: 300px;
    height: 200px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px) scale(1); /* 初始状态 */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    position: relative; /* 确保子元素可以相对于卡片定位 */
    overflow: hidden; /* 确保图片不会超出卡片边界 */
}

.card.show {
    opacity: 1;
    transform: translateY(0) scale(1); /* 显示状态 */
}

.card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(0) scale(1.05); /* 悬停状态 */
}

/* 特定于卡片 1 的样式 */
.card-1 {
    background-color: white; /* 根据图片实际边缘颜色手动设置 */
}

.card .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 确保图片覆盖整个卡片区域 */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* 将图片放在内容下方 */
    display: block; /* 确保图片作为块级元素 */
    max-width: 100%;
    max-height: 100%;
    backface-visibility: hidden; /* 防止渲染问题 */
    transform: translateZ(0); /* 强制硬件加速 */
}

.card .card-content {
    color: black; /* 文字颜色为黑色 */
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.5); /* 半透明白色背景，提高文字可读性 */
    border-radius: 15px;
    position: relative;
    z-index: 1; /* 确保内容在图片上方 */
    transition: color 0.3s ease; /* 添加过渡效果 */
}

.card .card-content h2,
.card .card-content p {
    margin: 0; /* 移除默认的外边距 */
}

/* 悬停时更改文字颜色 */
.card:hover .card-content {
    color: #EEDECD; /* 悬停时文字颜色变为#EEDECD */
}

/* 确保 .card-link 不改变卡片的布局或外观 */
.card-link {
    display: block;
    text-decoration: none; /* 移除默认的下划线 */
    color: inherit; /* 继承父级的颜色，避免文字颜色被改变 */
}

/* 如果需要，可以在这里添加其他样式规则 */
/* 不需要的重复定义，已删除 */

/* 卡片后的部分 */
.section-after-cards {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
}

/* 响应式设计 */
@media (max-width: 900px) {
    .card-row {
        flex-direction: column;
        align-items: center;
    }
    .card {
        width: 80%;
    }
}
