import axios from 'axios';
import { getDateString } from 'lib/util';

export interface News {
  slug: string;
  title: string;
  published_at: Date | string;
  article: object;
}

interface Entry<T> {
  fields: T;
  sys: object;
}

interface Entries {
  items: Array<Entry<unknown>>;
  limit: number;
  skip: number;
  sys: object;
  total: number;
}

interface EntriesOptions {
  content_type?: string;
}

export class Client {
  private static ENDPOINT_BASE = 'https://cdn.contentful.com';
  private static SPACE_ID = '5ymdx2afs21v';
  private static ACCESS_TOKEN = '590e3a7aea8f0dd6f4ba376775f5d013009774bab54701cbd225253692e25540';

  async entries<T>(options: EntriesOptions): Promise<Array<T>> {
    const endpoint = `${Client.ENDPOINT_BASE}/spaces/${Client.SPACE_ID}/entries`;
    const res = await axios.get(endpoint,
                                {
                                  headers: { Authorization: `Bearer ${Client.ACCESS_TOKEN}` },
                                  params: { ...options }
                                });
    const entries = res.data as Entries;
    return entries.items.map(item => (item as Entry<T>).fields);
  }

  async newsEntries(): Promise<Array<News>> {
    return (await this.entries<News>({ content_type: 'news' })).map(news => ({
      ...news,
      published_at: getDateString(news.published_at)
    }));
  }
}
