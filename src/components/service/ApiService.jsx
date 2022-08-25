import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '27751349-96ce74a45ad8206d51c3a29f1';

async function fetchApi(searchQuery, page) {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}
export default fetchApi;