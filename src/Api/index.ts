//导出请求的Api
import { request } from 'umi';

function PostRequest() {
  return request('/api/login/signup', {
    method: 'post',
  });
}

export { PostRequest };
