import getEntries from '.';
import { getDateString } from 'lib/util';

export interface News {
  slug: string;
  title: string;
  published_at: Date | string;
  article: NewsArticle;
}

export interface NewsArticle {
  content: Array<NewsArticleContentElement>;
  data: object;
  nodeType: 'document';
}

interface NewsArticleContentElement {
  content: Array<unknown>;
  data: object;
  nodeType: string;
}

export interface NewsArticleContentHeading1Element extends NewsArticleContentElement {
  nodeType: 'heading-1';
  content: Array<NewsArticleContentTextValue>;
}

export interface NewsArticleContentParagraphElement extends NewsArticleContentElement {
  nodeType: 'paragraph';
  content: Array<NewsArticleContentTextValue>;
}

interface NewsArticleContentTextValue {
  data: object;
  marks: Array<unknown>;
  nodeType: 'text';
  value: string;
}

interface NewsEntriesOptions {
  'fields.slug'?: string;
  [key: string]: string | number | undefined;
}

export async function getNewsEntries(options: NewsEntriesOptions = {}): Promise<Array<News>> {
  return (await getEntries<News>({ ...options, content_type: 'news' })).map(news => ({
    ...news,
    published_at: getDateString(news.published_at)
  }));
}
