# Vue 数据可视化大屏

一个基于 Vue 3 + TypeScript 的响应式数据可视化大屏项目，采用现代化的组件化开发方式，支持多种炫酷的数据展示效果。

## ✨ 功能特性

- 🎨 **炫酷UI设计** - 采用深色主题，科技感十足的数据大屏界面
- 📊 **丰富图表** - 集成 ECharts 和 DataV，支持多种数据可视化图表
- 📱 **响应式适配** - 支持不同屏幕尺寸的自适应展示
- ⚡ **实时数据** - 支持实时时间显示和数据更新
- 🧩 **组件化架构** - 模块化设计，易于维护和扩展
- 🔄 **动态装饰** - 内置多种动态装饰组件，提升视觉效果

## 🛠️ 技术栈

- **框架**: Vue 3.x + TypeScript
- **构建工具**: Vue CLI 5.x
- **状态管理**: Vuex 4.x
- **路由管理**: Vue Router 4.x
- **图表库**: ECharts 5.x
- **UI组件**: @kjgl77/datav-vue3
- **样式预处理**: Sass/SCSS
- **代码规范**: ESLint + TypeScript ESLint

## 📁 项目结构

```
vue-big-screen-plugin/
├── public/                 # 静态资源
│   ├── index.html         # HTML模板
│   └── favicon.ico        # 网站图标
├── src/
│   ├── assets/            # 静态资源
│   │   ├── icon/          # 图标字体
│   │   ├── scss/          # 全局样式
│   │   └── logo.png       # Logo图片
│   ├── common/            # 公共资源
│   │   └── echart/        # ECharts配置
│   ├── components/        # 全局组件
│   │   ├── componentInstall.ts  # 组件注册
│   │   └── echartCanvas/  # 图表画布组件
│   ├── constant/          # 常量定义
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理
│   ├── utils/             # 工具函数
│   │   ├── index.ts       # 通用工具
│   │   └── useDraw.ts     # 绘制适配工具
│   ├── views/             # 页面组件
│   │   ├── index/         # 主页面
│   │   ├── center/        # 中心区域
│   │   ├── centerLeft1/   # 左侧区域1
│   │   ├── centerLeft2/   # 左侧区域2
│   │   ├── centerRight1/  # 右侧区域1
│   │   ├── centerRight2/  # 右侧区域2
│   │   ├── bottomLeft/    # 底部左侧
│   │   └── bottomRight/   # 底部右侧
│   ├── App.vue            # 根组件
│   └── main.ts            # 入口文件
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript配置
├── vue.config.js          # Vue CLI配置
└── README.md              # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 14.x
- npm >= 6.x 或 yarn >= 1.x

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发运行

```bash
# 启动开发服务器
npm run serve

# 或使用 yarn
yarn serve
```

访问 `http://localhost:8080` 查看项目效果。

### 构建部署

```bash
# 构建生产版本
npm run build

# 或使用 yarn
yarn build
```

构建完成后，生成的文件将在 `dist/` 目录中。

## 🎯 核心组件

### 主要页面组件

- **CenterLeft1/CenterLeft2** - 左侧数据展示区域
- **Center** - 中心主要内容区域  
- **CenterRight1/CenterRight2** - 右侧数据展示区域
- **BottomLeft/BottomRight** - 底部数据展示区域

### 装饰组件

项目使用了 DataV 提供的多种装饰组件：
- `dv-decoration-6/8/10` - 标题装饰
- `dv-border-box-12/13` - 边框装饰
- `dv-loading` - 加载动画

## 🔧 开发指南

### 添加新的图表组件

1. 在 `src/views/` 目录下创建新的组件文件夹
2. 创建 `index.vue` 主组件文件
3. 在 `chart/` 子目录下创建具体的图表逻辑
4. 在主页面 `views/index/index.vue` 中引入并使用

### 自定义主题样式

- 全局样式：修改 `src/assets/scss/` 下的样式文件
- 组件样式：在各组件的 `<style>` 标签中定义
- 变量定义：使用 `src/assets/scss/_variables.scss` 管理全局变量

### 屏幕适配

项目使用 `useDraw` 工具实现屏幕自适应：
- 自动计算缩放比例
- 监听窗口大小变化
- 保持界面比例协调

## 📝 代码规范

项目使用 ESLint + TypeScript 进行代码检查：

```bash
# 运行代码检查
npm run lint

# 或使用 yarn
yarn lint
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [ECharts](https://echarts.apache.org/) - 强大的数据可视化库
- [DataV](https://github.com/DataV-Team/DataV) - Vue 数据可视化组件库
