class TweetsController < ApplicationController
    
    def index
        tweets = Tweet.all
        render json: {status: 200, tweets: tweets}
    end

    def show
        found_tweet = Tweet.find(params[:id])
        found_replies = Tweet.find(params[:id]).replies
        render json: {status: 200, tweet: found_tweet, replies: found_replies}
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

      ## update 
      ## revise values for the Tweet specified in params[:id]
      def update
        tweet = Tweet.find(params[:id])
        tweet.update(tweet_params)
        render(json: {tweet: tweet}, status: 201)
      end

      ## removing a tweet from the database.
      def destroy 
        tweet = Tweet.destroy(params[:id])
        render(status: 204)
      end
    private
    
    def tweet_params
        params.require(:tweet).permit(:title, :content, :author)
    end
end