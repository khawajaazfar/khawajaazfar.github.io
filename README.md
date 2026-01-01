# 🎓 学术个人主页模板

一个现代化、响应式的学术个人主页模板，适用于研究生、博士生和学者展示他们的研究成果和学术背景。

## ✨ 特性

- 📱 **完全响应式设计** - 在所有设备上都能完美显示
- 🎨 **现代化UI设计** - 使用渐变背景和优雅的排版
- ⚡ **快速加载** - 优化的CSS和JavaScript
- 🔧 **易于自定义** - 清晰的代码结构和注释
- 📚 **学术导向** - 专为学者设计的内容结构
- 🌐 **SEO友好** - 优化的元数据和结构化内容

## 🚀 快速开始

### 方法一：GitHub Pages 部署（推荐）

1. **创建GitHub账户**
   - 访问 [github.com](https://github.com) 注册账户
   - 验证你的邮箱地址

2. **创建仓库**
   - 点击 "New repository"
   - 仓库名命名为 `[你的用户名].github.io`
   - 选择 "Public"
   - 勾选 "Add a README file"

3. **上传文件**
   - 将所有文件上传到你的仓库
   - 或者克隆这个模板仓库

4. **启用GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 点击 Save

5. **访问你的网站**
   - 等待几分钟后访问 `https://[你的用户名].github.io`

### 方法二：本地开发

1. **克隆或下载文件**
   ```bash
   git clone [仓库地址]
   cd academic-homepage
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python 3
   python -m http.server 8000
   
   # 或使用Node.js
   npx http-server
   
   # 或使用PHP
   php -S localhost:8000
   ```

3. **访问本地网站**
   - 打开浏览器访问 `http://localhost:8000`

## 📝 自定义指南

### 1. 基本信息修改

编辑 `index.html` 文件中的以下内容：

```html
<!-- 修改个人信息 -->
<h1>Your Name</h1>  <!-- 改为你的姓名 -->
<h3>PhD Student in Computer Science</h3>  <!-- 改为你的身份 -->
<p class="affiliation">University Name</p>  <!-- 改为你的学校 -->

<!-- 修改社交媒体链接 -->
<a href="mailto:your.email@university.edu">  <!-- 改为你的邮箱 -->
<a href="https://github.com/yourusername">  <!-- 改为你的GitHub -->
```

### 2. 添加你的照片

1. 将你的头像照片重命名为 `profile.jpg`
2. 放入 `images/` 文件夹
3. 建议尺寸：300x300像素，正方形

### 3. 修改研究内容

编辑 `index.html` 中的研究兴趣和描述：

```html
<!-- 在About Me部分 -->
<div class="about-text">
    <p>修改这里的个人简介...</p>
</div>

<!-- 在Research Interests部分 -->
<ul>
    <li>你的研究方向1</li>
    <li>你的研究方向2</li>
    <!-- 添加更多 -->
</ul>
```

### 4. 添加论文发表

在Publications部分添加你的论文：

```html
<div class="publication-item">
    <div class="publication-content">
        <div class="authors">
            <strong>你的姓名</strong>, 合作者姓名 (年份).
        </div>
        <div class="title">
            <a href="论文链接" target="_blank">论文标题</a>
        </div>
        <div class="venue">会议或期刊名称</div>
        <div class="publication-links">
            <a href="PDF链接" target="_blank"><i class="fas fa-file-pdf"></i> PDF</a>
            <a href="代码链接" target="_blank"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### 5. 更新工作经历

在Experience部分修改时间线：

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h4>职位名称</h4>
        <div class="company">公司/学校名称</div>
        <div class="date">时间段</div>
        <p>工作描述...</p>
    </div>
</div>
```

### 6. 颜色主题自定义

在 `styles.css` 中修改颜色变量：

```css
/* 主色调 */
.hero {
    background: linear-gradient(135deg, #你的颜色1, #你的颜色2);
}

/* 强调色 */
.nav-logo a, .social-links a:hover {
    color: #你的强调色;
}
```

### 7. 添加CV文件

1. 将你的CV文件重命名为 `CV.pdf`
2. 放入 `files/` 文件夹
3. 确保HTML中的链接正确：`href="files/CV.pdf"`

## 📂 文件结构

```
academic-homepage/
├── index.html          # 主HTML文件
├── styles.css          # CSS样式文件
├── script.js          # JavaScript文件
├── README.md          # 说明文档
├── images/            # 图片文件夹
│   ├── profile.jpg    # 个人头像
│   └── research-featured.png  # 研究图片
└── files/             # 文件下载文件夹
    └── CV.pdf         # 简历文件
```

## 🎨 设计说明

### 配色方案
- **主色调**: 蓝紫渐变 (#667eea → #764ba2)
- **文字色**: 深灰色系 (#1e293b, #475569)
- **强调色**: 蓝色 (#2563eb)
- **背景色**: 浅灰白色 (#f8fafc)

### 字体
- **主字体**: Inter (现代无衬线字体)
- **图标**: Font Awesome 6

### 响应式断点
- **桌面**: >768px
- **平板**: 481px-768px
- **手机**: ≤480px

## 🛠️ 高级自定义

### 添加新的部分

1. 在HTML中添加新的section：
```html
<section id="teaching" class="teaching">
    <div class="container">
        <h2>Teaching</h2>
        <!-- 你的内容 -->
    </div>
</section>
```

2. 在CSS中添加对应样式：
```css
.teaching {
    padding: 6rem 0;
    background: white;
}
```

3. 在导航菜单中添加链接：
```html
<li><a href="#teaching">Teaching</a></li>
```

### 添加博客功能

如果你需要博客功能，建议使用Jekyll或者Hugo等静态网站生成器。

### SEO优化

在 `<head>` 部分添加：

```html
<meta name="description" content="你的个人简介">
<meta name="keywords" content="你的姓名,研究领域,大学">
<meta property="og:title" content="你的姓名 - Academic Homepage">
<meta property="og:description" content="你的个人简介">
<meta property="og:image" content="images/profile.jpg">
```

## 🐛 常见问题

### Q: 图片显示不出来怎么办？
A: 检查图片路径是否正确，确保图片文件在 `images/` 文件夹中。

### Q: 如何更改网站图标？
A: 添加favicon.ico文件到根目录，并在HTML头部添加：
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### Q: 如何添加Google Analytics？
A: 在 `</head>` 标签前添加Google Analytics跟踪代码。

### Q: 移动端显示有问题？
A: 检查viewport meta标签是否正确设置，确保CSS中的媒体查询正常工作。

## 📱 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 📄 许可证

MIT License - 你可以自由使用和修改这个模板。

## 🙏 致谢

- 设计灵感来源于现代学术网站最佳实践
- 使用了Font Awesome图标库
- 采用Inter字体获得最佳阅读体验

## 📧 支持

如果你在使用过程中遇到问题，可以：
1. 查看这个README文档
2. 检查浏览器开发者控制台的错误信息
3. 参考其他学术网站的设计

---

�� **祝你的学术网站建设顺利！** 