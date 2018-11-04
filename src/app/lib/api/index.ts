import axios from 'axios';
import { getDateString } from 'lib/util';

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

const ENDPOINT_BASE = 'https://cdn.contentful.com';
const SPACE_ID = '5ymdx2afs21v';
const ACCESS_TOKEN = '590e3a7aea8f0dd6f4ba376775f5d013009774bab54701cbd225253692e25540';

interface Options {
  [key: string]: string | number | undefined;
};

export default async function<T>(options: Options): Promise<Array<T>> {
  const endpoint = `${ENDPOINT_BASE}/spaces/${SPACE_ID}/entries`;
  const axiosOptions = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}`,
                                    Accept: 'application/json' },
                         params: { ...options } };
  const res = await axios.get(endpoint, axiosOptions);
  return (res.data as Entries).items.map(item => (item as Entry<T>).fields);
}
