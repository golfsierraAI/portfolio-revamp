export const fetchBlogPosts = async () => {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@golfsierra'
    );
    const data = await response.json();
    return data;
}