// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};

//post tweet
const ADD_TWEET = 'tweet/addTweet';

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export const postTweet = (message) => {
  return async function postTweetThunk(dispatch, getState) {
    debugger
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(message);
    const response = await fetch('api/tweets', {
      method,
      headers,
      body
    })

    if(response) {
      const data = await response.json();

      dispatch(addTweet(data))
    }
  }
}

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case ADD_TWEET: {
      const newState = {...state}
      newState[action.tweet.id] = action.tweet;
      return newState;
    }
    default:
      return state;
  }
};

export default tweetsReducer;