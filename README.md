🎓 Academic Personal Homepage Template
A modern, responsive academic homepage template suitable for graduate students, doctoral students, and scholars to showcase their research achievements and academic background.

✨ Features
📱Fully responsive design - displays perfectly on all devices
🎨Modern UI Design - Using gradient backgrounds and elegant typography
⚡Fast loading - Optimized CSS and JavaScript
🔧Easy to customize - Clear code structure and comments
📚Academic Orientation - Content Structure Designed Specifically for Scholars
🌐 SEO Friendly - Optimized metadata and structured content
🚀 Get Started Quickly
Method 1: Deployment via GitHub Pages (Recommended)
Create a GitHub account

Register an account at github.com
Verify your email address
Create a repository

Click "New repository"
The warehouse name is named[你的用户名].github.io
Select "Public"
Check the box for "Add a README file".
Upload File

Upload all files to your repository
Or clone this template repository
Enable GitHub Pages

Go to Settings → Pages in the warehouse
Select "Deploy from a branch" for Source.
Branch: Select "main"
Click Save
Visit your website

Access will be available in a few minutes.https://[你的用户名].github.io
Method 2: Local Development
Cloning or downloading files

git clone [仓库地址]
cd academic-homepage
Start the local server

# 使用Python 3
python -m http.server 8000

# 或使用Node.js
npx http-server

# 或使用PHP
php -S localhost:8000
Access local websites

Open your browser to accesshttp://localhost:8000
📝 Custom Guide
1. Modify basic information
Edit index.htmlthe following content in the file:

<!-- 修改个人信息 -->
<h1>Your Name</h1>  <!-- 改为你的姓名 -->
<h3>PhD Student in Computer Science</h3>  <!-- 改为你的身份 -->
<p class="affiliation">University Name</p>  <!-- 改为你的学校 -->

<!-- 修改社交媒体链接 -->
<a href="mailto:your.email@university.edu">  <!-- 改为你的邮箱 -->
<a href="https://github.com/yourusername">  <!-- 改为你的GitHub -->
2. Add your photo
Rename your profile pictureprofile.jpg
Put it in images/a folder
Recommended size: 300x300 pixels, square
3. Revise the research content
index.htmlResearch interests and descriptions in the editor's notes :

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
4. Add paper publication
Add your paper to the Publications section:

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
5. Update work experience
Modify the timeline in the Experience section:

<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h4>职位名称</h4>
        <div class="company">公司/学校名称</div>
        <div class="date">时间段</div>
        <p>工作描述...</p>
    </div>
</div>
6. Customizable color themes
styles.cssModify the color variable in :

/* 主色调 */
.hero {
    background: linear-gradient(135deg, #你的颜色1, #你的颜色2);
}

/* 强调色 */
.nav-logo a, .social-links a:hover {
    color: #你的强调色;
}
7. Add CV files
Rename your CV file toCV.pdf
Put it in files/a folder
Ensure that the links in the HTML are correct:href="files/CV.pdf"
📂 File Structure
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
🎨 Design Description
Color scheme
Main color scheme : Blue-purple gradient (#667eea → #764ba2)
Text color : Dark gray (#1e293b, #475569)
Accent color : Blue (#2563eb)
Background color : Light grayish-white (#f8fafc)
Font
Main font : Inter (modern sans-serif font)
Icon : Font Awesome 6
Responsive breakpoints
Desktop : >768px
Tablet : 481px-768px
Mobile phone : ≤480px
🛠️ Advanced Customization
Add new section
Add a new section to the HTML:
<section id="teaching" class="teaching">
    <div class="container">
        <h2>Teaching</h2>
        <!-- 你的内容 -->
    </div>
</section>
Add the corresponding style to your CSS:
.teaching {
    padding: 6rem 0;
    background: white;
}
Add a link to the navigation menu:
<li><a href="#teaching">Teaching</a></li>
Add blog functionality
If you need blog functionality, we recommend using a static site generator such as Jekyll or Hugo.

SEO optimization
Add the following to <head>the section:

<meta name="description" content="你的个人简介">
<meta name="keywords" content="你的姓名,研究领域,大学">
<meta property="og:title" content="你的姓名 - Academic Homepage">
<meta property="og:description" content="你的个人简介">
<meta property="og:image" content="images/profile.jpg">
🐛 Frequently Asked Questions
Q: What should I do if the image is not displaying?
A: Check if the image path is correct and ensure the image file is in images/the folder.

Q: How do I change the website icon?
A: Add the favicon.ico file to the root directory and add the following to the HTML header:

<link rel="icon" href="favicon.ico" type="image/x-icon">
Q: How do I add Google Analytics?
A: </head>Add the Google Analytics tracking code before the tag.

Q: Is there a display issue on mobile devices?
A: Check if the viewport meta tag is set correctly and ensure that media queries in the CSS are working properly.

📱 Browser compatibility
✅ Chrome 60+
✅ Firefox 60+
✅ Safari 12+
✅ Edge 79+
📄 License
MIT License - You are free to use and modify this template.

🙏 Acknowledgements
The design inspiration comes from best practices of modern academic websites.
Used Font Awesome icon library
For the best reading experience, use the Inter font.
📧 Support
If you encounter any problems during use, you can:

View this README document
Check the error messages in the browser developer console.
Referencing the design of other academic websites
Wishing you a successful academic website launch!
