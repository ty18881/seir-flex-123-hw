class TweetsController < ApplicationController
    
    def index
        tweets = Tweet.all
        render json: {status: 200, tweets: tweets}
    end

    def show
        found_tweet = Tweet.find(params[:id])
        render json: {status: 200, tweet: found_tweet}
    end

    def create
        ## creating the new object according the Tweet model
        ## limiting input to the specified fields.
        tweet = Tweet.new(tweet_params)
    ## attempting to save the new tweet into our database.
    ## return status code and error if applicable.
        if tweet.save
          render(status: 201, json: { tweet: tweet }) 
        else
          render(status: 422, json: { tweet: tweet, errors: tweet.errors })
        end
      end

    private
    
    def tweet_params
        params.require(:tweet).permit(:title, :content, :author)
    end
end