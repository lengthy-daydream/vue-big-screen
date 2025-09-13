# Netlify 自动化部署配置说明

本项目已配置了 Netlify 自动化部署，支持通过 GitHub Actions 自动构建和部署到 Netlify。

## 配置步骤

### 1. 在 Netlify 中创建站点

1. 登录到 [Netlify](https://www.netlify.com/)
2. 点击 "New site from Git"
3. 选择 GitHub 并授权连接
4. 选择此仓库
5. 部署设置会自动从 `netlify.toml` 读取，无需手动配置

### 2. 获取 Netlify API Token 和 Site ID

#### 获取 API Token：
1. 在 Netlify 中进入 [User settings > Applications](https://app.netlify.com/user/applications#personal-access-tokens)
2. 点击 "New access token"
3. 输入描述并生成 token
4. **重要：** 立即复制 token，关闭窗口后无法再次查看

#### 获取 Site ID：
1. 进入您的 Netlify 站点设置
2. 在 "Site information" 中找到 "API ID"
3. 复制这个 ID

### 3. 在 GitHub 中配置 Secrets

在您的 GitHub 仓库中：

1. 进入 Settings > Secrets and variables > Actions
2. 添加以下 Repository secrets：
   - `NETLIFY_AUTH_TOKEN`: 您在步骤 2 中获取的 API Token
   - `NETLIFY_SITE_ID`: 您在步骤 2 中获取的 Site ID

### 4. 触发部署

配置完成后，每次推送到 `main` 分支或创建 Pull Request 时都会自动触发部署。

## 部署流程

1. **代码推送** → GitHub 检测到变更
2. **GitHub Actions** → 自动运行 `.github/workflows/netlify.yml`
3. **构建项目** → 使用 `npm run build:netlify` 命令
4. **部署到 Netlify** → 使用 Netlify GitHub Action

## 配置文件说明

### `.github/workflows/netlify.yml`
GitHub Actions 工作流配置，定义了自动化构建和部署的步骤。

### `netlify.toml`
Netlify 平台的配置文件，包含：
- 构建命令和输出目录
- 静态资源优化设置
- SPA 路由重定向规则
- 缓存和安全头配置

### `package.json` 更新
- 添加了 `build:netlify` 脚本，专门用于 Netlify 部署
- 与原有的 `build` 脚本（用于 GitHub Pages）分离

### `vue.config.js` 更新
- 根据环境变量 `VUE_APP_DEPLOY_TARGET` 动态设置 `publicPath`
- Netlify 部署时使用根路径 `/`
- GitHub Pages 部署时使用子路径 `/vue-big-screen/`

## 环境变量

项目支持以下环境变量：
- `VUE_APP_DEPLOY_TARGET`: 设置为 `netlify` 时使用 Netlify 配置
- `NODE_ENV`: 构建环境，生产环境设为 `production`

## 故障排除

### 部署失败
1. 检查 GitHub Secrets 是否正确配置
2. 确认 Netlify API Token 有效且权限充足
3. 查看 GitHub Actions 日志获取详细错误信息

### 网站访问问题
1. 检查 Netlify 站点域名配置
2. 确认 SPA 路由重定向规则是否正确
3. 查看浏览器开发者工具网络面板

## 优势

- **自动化部署**：推送代码即自动部署
- **分离环境**：支持同时部署到 GitHub Pages 和 Netlify
- **性能优化**：Netlify 提供 CDN、图片优化等功能
- **预览部署**：Pull Request 自动生成预览部署链接 