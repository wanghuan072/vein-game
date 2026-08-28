import { marked } from 'marked'

marked.use({ breaks: true, gfm: true })

export function MarkdownArticle({ markdown }: { markdown: string }) {
  const html = marked.parse(markdown) as string
  return <div className="detail-article" dangerouslySetInnerHTML={{ __html: html }} />
}
