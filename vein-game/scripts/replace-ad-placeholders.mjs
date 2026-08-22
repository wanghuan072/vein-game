import fs from 'fs'

const files = [
  'src/views/HomeView.vue',
  'src/views/GuidesView.vue',
  'src/views/GuideDetailView.vue',
  'src/views/wiki/WikiView.vue',
  'src/views/wiki/WikiDetailView.vue',
  'src/views/SearchView.vue',
  'src/views/MapView.vue',
  'src/views/MapDetailView.vue',
]

const asideStyle =
  '<aside class="container" style="display: flex; align-items: center; justify-content: center; padding: 1rem 0;">'

function replaceBlock(content, comment, innerText, replacementLines) {
  const block = new RegExp(
    `[ \\t]*<!-- ${comment} -->\\s*\\n[ \\t]*${asideStyle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n[ \\t]*${innerText}\\s*\\n[ \\t]*</aside>`,
    'g',
  )
  return content.replace(block, (m) => {
    const indent = m.match(/^([ \t]*)<!--/)?.[1] ?? '      '
    return replacementLines.map((line) => indent + line).join('\n')
  })
}

for (const file of files) {
  const path = file
  let content = fs.readFileSync(path, 'utf8')
  const before = content

  content = replaceBlock(content, '广告占位符 - 原生横幅', '广告占位符 - 原生横幅', [
    '<!-- 广告：原生横幅 -->',
    '<!-- <AdNativeBanner class="container" /> -->',
  ])

  content = replaceBlock(content, '广告占位符 - 侧边广告', '广告占位符 - 侧边广告', [
    '<!-- 广告：侧边（160x600） -->',
    '<!-- <AdSidebar class="container" /> -->',
  ])

  content = replaceBlock(content, '广告占位符', '广告占位符', [
    '<!-- 广告：banner（728x90 / 移动端 320x50） -->',
    '<!-- <AdBanner class="container" /> -->',
  ])

  if (content !== before) {
    fs.writeFileSync(path, content)
    const left = (content.match(/广告占位符/g) || []).length
    console.log('updated', file, 'remaining placeholders:', left)
  } else {
    console.log('unchanged', file)
  }
}
