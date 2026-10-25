import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base 必须与博客在 GitHub Pages 上的实际访问路径一致：
// 寻宝游戏仍占用根地址 https://<用户名>.github.io/treasure-game/
// 博客部署到子目录，访问地址为 https://<用户名>.github.io/treasure-game/blog/
export default defineConfig({
  base: '/treasure-game/blog/',
  plugins: [vue()]
})
