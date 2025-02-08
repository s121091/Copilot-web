// 缓存 DOM 元素
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

// 处理按钮点击
function handleClick() {
    alert('按钮被点击了！');
}

// 滚动处理函数
function handleScroll() {
    const windowHeight = window.innerHeight;

    // 控制卡片的显示动画
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < windowHeight - 50) {
            card.classList.add('show');
        }
    });
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// 初始化函数
function init() {
    // 检查初始状态下卡片是否在视口内
    handleScroll();

    // 添加滚动事件监听器，使用防抖
    document.addEventListener('scroll', debounce(handleScroll, 100));
}

// 当内容加载完成后，执行初始化
document.addEventListener('DOMContentLoaded', init);

// 滚动到 Favourite 时调整偏移
function scrollToFavourite(event) {
    event.preventDefault();

    const target = document.getElementById('Favourite-anchor');
    if (target) {
        const offset = -200; // 与导航栏高度一致

        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// 控制菜单展开与收起
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // 切换菜单的open类，控制显示与隐藏
    navbar.classList.toggle('open');
}