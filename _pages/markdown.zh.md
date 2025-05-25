---
permalink: /markdown-zh/
title: "Markdown 指南"
author_profile: true
redirect_from: 
  - /md-zh/
  - /markdown-zh.html
---

## 关键文件/目录位置

* 基本配置选项: _config.yml
* 顶部导航栏配置: _data/navigation.yml
* 单个页面: _pages/
* 页面集合是 .md 或 .html 文件，位于：
  * _publications/ (出版物)
  * _portfolio/ (作品集)
  * _posts/ (博客文章)
  * _teaching/ (教学)
  * _talks/ (演讲)
* 页脚: _includes/footer.html
* 静态文件 (如 PDF): /files/
* 个人资料图片 (可在 _config.yml 中设置): images/profile.png

## 提示和技巧

* 将文件命名为 ".md" 以使其以 markdown 格式呈现，命名为 ".html" 以使其以 HTML 格式呈现。
* 转到[提交列表](https://github.com/academicpages/academicpages.github.io/commits/master) (在您的仓库中) 以查找 GitHub 使用 Jekyll 构建的最后一个版本。
  * 绿色复选标记：构建成功
  * 橙色圆圈：正在构建
  * 红色 X：错误
  * 无图标：未构建

* Academic Pages 使用 [Jekyll Kramdown](https://jekyllrb.com/docs/configuration/markdown/)，这是一个 GitHub Flavored Markdown (GFM) 解析器，与 GitHub 上使用的 Markdown 版本类似，但可能存在一些细微差异。
  * GitHub 上支持的某些表情符号应通过 [Jemoji](https://github.com/jekyll/jemoji) 插件支持 :computer:。
  * [通过 Jemoji 为 Jekyll 添加表情符号](https://www.fabriziomusacchio.com/blog/2021-08-16-emojis_for_Jekyll/#computer)这篇博文中可以找到支持的表情符号的最佳列表。

* 虽然 GitHub Pages 会阻止服务器端代码运行，但支持客户端脚本。
  * 这意味着支持 Google Analytics，并且[wiki](https://github.com/academicpages/academicpages.github.io/wiki/Adding-Google-Analytics) 应包含有关使其正常工作的最新信息。

* 您的简历可以使用 Markdown ([预览](https://academicpages.github.io/cv/)) 或通过 JSON ([预览](https://academicpages.github.io/cv-json/)) 生成，布局略有不同。您可以在 `_data/navigation.yml` 中更新正在使用的路径，默认情况下隐藏 JSON 格式的简历。

## 资源
 * [Liquid 语法指南](https://shopify.github.io/liquid/tags/control-flow/)
 * [MathJax 文档](https://docs.mathjax.org/en/latest/)

## MathJax 

模板中包含对 MathJax 3.0 版的支持：

$$
\displaylines{
\nabla \cdot E= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot B=0 \\\
\nabla \times E= -\partial_tB \\\
\nabla \times B  = \mu_0 \left(J + \varepsilon_0 \partial_t E \right)
}
$$

支持默认分隔符 `$$...$$` 和 `\\[...\\]` 用于显示数学公式，而 `\\(...\\)` 应用于行内数学公式 (例如，\\(a^2 + b^2 = c^2\\))

**注意** 由于 Academic Pages 使用 Markdown，这会对 MathJax 和 LaTeX 的字符转义和换行造成一些干扰，尽管[存在一些解决方法](https://math.codidact.com/posts/278763/278772#answer-278772)。

## Markdown 指南

Academic Pages 使用 [kramdown](https://kramdown.gettalong.org/index.html) 进行 Markdown 渲染，它与其他 Markdown 实现 (如 GitHub) 有一些区别。除了本指南外，请参阅 [kramdown 语法页面](https://kramdown.gettalong.org/syntax.html)以获取完整文档。

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 块引用

单行块引用：

> 引言很酷。

## 表格

### 表格 1

| 条目            | 项目   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [张三](#)    | 2016   | 列表中项目的描述                          |
| [李四](#)    | 2019   | 列表中项目的描述                          |
| [王五](#)     | 2022   | 列表中项目的描述                          |

### 表格 2

| 标题1 | 标题2 | 标题3 |
|:--------|:-------:|--------:|
| 单元格1   | 单元格2   | 单元格3   |
| 单元格4   | 单元格5   | 单元格6   |
|-----------------------------|
| 单元格1   | 单元格2   | 单元格3   |
| 单元格4   | 单元格5   | 单元格6   |
|=============================|
| 页脚1   | 页脚2   | 页脚3   |

## 定义列表

定义列表标题
:   定义列表分隔。

创业公司
:   创业公司或初创公司是指旨在寻找可重复和可扩展商业模式的公司或临时组织。

#dowork
:   由 Rob Dyrdek 和他的私人保镖 Christopher "Big Black" Boykins 创造的 "Do Work" 可以作为自我激励和他人的激励。

Do It Live
:   我会让 Bill O'Reilly [解释](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") 这个。

## 无序列表 (嵌套)

  * 列表项一
      * 列表项一
          * 列表项一
          * 列表项二
          * 列表项三
          * 列表项四
      * 列表项二
      * 列表项三
      * 列表项四
  * 列表项二
  * 列表项三
  * 列表项四

## 有序列表 (嵌套)

  1. 列表项一
      1. 列表项一
          1. 列表项一
          2. 列表项二
          3. 列表项三
          4. 列表项四
      2. 列表项二
      3. 列表项三
      4. 列表项四
  2. 列表项二
  3. 列表项三
  4. 列表项四

## 按钮

应用 `.btn` 类可以使任何链接更加突出。

## 注意事项

支持使用以下语法的基本注意事项或标注：

```markdown
**注意!** 您还可以通过在段落后的行附加 `{: .notice}` 来添加注意事项。
{: .notice}
```

将呈现为：

**注意!** 您还可以通过在段落后的行附加 `{: .notice}` 来添加注意事项。
{: .notice}

### 脚注

脚注可用于阐明文本中的观点或引用信息。[^1] Markdown 支持数字脚注，以及文本，只要值是唯一的。[^note]

```markdown
这是常规文本。[^1] 这是更多常规文本。[^note]

[^1]: 这是脚注本身。
[^note]: 这是另一个脚注。
```

[^1]: 例如这个脚注。
[^note]: 当使用文本作为脚注标记时，名称中不允许有空格。

## HTML 标签

### Address 标签

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> 美国
</address>

### Anchor 标签 (又名链接)

这是一个[链接](http://github.com "GitHub")的示例。

### Abbreviation 标签

缩写 CSS 代表 "Cascading Style Sheets"。

*[CSS]: 层叠样式表

### Cite 标签

"代码即诗。" ---<cite>Automattic</cite>

### Code 标签

您稍后将在这些测试中了解到 `word-wrap: break-word;` 将是您最好的朋友。

您还可以编写更大的代码块，并支持某些语言的语法高亮，例如 Python：

```python
print('你好，世界！')
```

或 R：

```R
print("你好，世界！", quote = FALSE)
```

### Details 标签 (可折叠部分)

HTML `<details>` 标签与 Markdown 配合得很好，允许您包含可折叠部分，有关如何使用该标签的更多信息，请参阅 [W3Schools](https://www.w3schools.com/tags/tag_details.asp)。

<details>
  <summary>默认折叠</summary>
  此部分默认折叠！
</details>

源代码：

```HTML
<details>
  <summary>默认折叠</summary>
  此部分默认折叠！
</details>
```

或者，您可以通过在标签中包含 `open` 属性来默认展开某个部分：

<details open>
  <summary>默认展开</summary>
  由于 &lt;details open&gt; 标签中的 open 属性，此部分默认展开！
</details>


### Emphasize 标签

Emphasize 标签应使文本变为_斜体_。

### Insert 标签

此标签应表示<ins>插入的</ins>文本。

### Keyboard 标签

这个鲜为人知的标签模拟<kbd>键盘文本</kbd>，其样式通常类似于 `<code>` 标签。

### Preformatted 标签

此标签用于设置大块代码的样式。

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote 标签

<q>开发者，开发者，开发者&#8230;</q> &#8211;史蒂夫·鲍尔默

### Strike 标签

此标签将让您<strike>删除文本</strike>。

### Strong 标签

此标签显示**粗体文本**。

### Subscript 标签

使用 H<sub>2</sub>O 来展示我们的科学样式，这应该会使 "2" 向下移动。

### Superscript 标签

继续讨论科学和艾萨克·牛顿的 E = MC<sup>2</sup>，这应该会使 "2" 向上移动。

### Variable 标签

这允许您表示<var>变量</var>。

***
**脚注**

页面中的脚注将在此行之后返回，返回到<a href="#footnotes">Markdown 脚注</a>部分。
---
