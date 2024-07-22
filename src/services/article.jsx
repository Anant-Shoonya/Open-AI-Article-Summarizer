import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;



const options = {
	method: 'GET',
	hostname: 'article-extractor-and-summarizer.p.rapidapi.com',
	port: null,
	path: '/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2',
	headers: {
		'x-rapidapi-key': '6c75aaa180msh6369fe92da4197dp1a79a1jsn8ae621adf1f3',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

export const articleApi = createApi({
  // here a const fuction is initialized which is articleApi and 
  //is assigned to createApi fuction coming from redux toolkit, 
  //and an objext is being sent with this function which contains reducerpath 
  //and fetchbasequerry as two elements.
  reducerPath: "articleApi",
  baseQuery : fetchBaseQuery({
    baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders:(headers)=>{
        headers.set('x-rapidapi-key', rapidApiKey);
        headers.set('x-rapidapi-host' , 'article-extractor-and-summarizer.p.rapidapi.com');
        return headers;
    }
    
  }),
  endpoints:(builder) => ({
    getSummary: builder.query({
        query:(params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  })
});

export const {useLazyGetSummaryQuery} = articleApi;
