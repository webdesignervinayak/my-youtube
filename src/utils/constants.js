export const API_KEY = "AIzaSyBtCCmCcxE_lk4k1cB9XSzMmTXtDYPekwE";

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_ENGINE_API ="https://www.googleapis.com/youtube/v3/search?part=snippet&q="

//const searchParameterText = useSelector((store) => store.search.searchParameterText)
//const showVideo = useSelector((store) => store.search.showVideo)

//const searchData = await fetch(YOUTUBE_SEARCH_ENGINE_API+searchParameterText+"&maxResults=25&key="+API_KEY)