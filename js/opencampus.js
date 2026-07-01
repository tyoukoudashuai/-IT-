document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector(".memory-carousel .track");
        const cards = Array.from(track.children);
        const prevBtn = document.querySelector(".memory-carousel .prev");
        const nextBtn = document.querySelector(".memory-carousel .next");

        let index = 0; // 初始选中第1张

        // --- 配置项 ---
        // 卡片宽度 260px + 左右margin各30px (共60px) = 320px
        const ITEM_WIDTH = 260; //
        const ITEM_GAP = 60; //
        const TOTAL_WIDTH = ITEM_WIDTH + ITEM_GAP; 

        function update() {
            // 1. 清除旧状态
            cards.forEach(card => {
                card.classList.remove("prev", "active", "next");
            });

            // 2. 计算索引 (循环逻辑)
            const len = cards.length;
            const prevIndex = (index - 1 + len) % len;
            const nextIndex = (index + 1) % len;

            // 3. 添加新状态类名 (CSS会处理放大效果)
            cards[index].classList.add("active");
            cards[prevIndex].classList.add("prev");
            cards[nextIndex].classList.add("next");

            // 4. 计算偏移量
            // 解释：让 active 的卡片始终居中
            // 默认 track 的 left 是 50%。
            // 我们需要把当前卡片移到 track 的原点（左边），然后再往左移半个卡片宽，让中心对齐。
            // 公式：- (当前索引 * 总宽度) - (单个卡片宽度 / 2)
            const offset = - (index * TOTAL_WIDTH) - (ITEM_WIDTH / 2);

            track.style.transform = `translateX(${offset}px)`;
        }

        // --- 事件监听 ---

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % cards.length;
            update();
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + cards.length) % cards.length;
            update();
        });

        // 窗口大小改变时重新计算（如果需要响应式调整宽度，可以在这里加逻辑）
        window.addEventListener('resize', update);

        // 初始化
        update();
    });