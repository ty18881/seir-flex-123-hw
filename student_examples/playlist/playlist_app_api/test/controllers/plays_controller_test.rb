require 'test_helper'

class PlaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @play = plays(:one)
  end

  test "should get index" do
    get plays_url, as: :json
    assert_response :success
  end

  test "should create play" do
    assert_difference('Play.count') do
      post plays_url, params: { play: { playlist_id: @play.playlist_id, plays: @play.plays, song_id: @play.song_id } }, as: :json
    end

    assert_response 201
  end

  test "should show play" do
    get play_url(@play), as: :json
    assert_response :success
  end

  test "should update play" do
    patch play_url(@play), params: { play: { playlist_id: @play.playlist_id, plays: @play.plays, song_id: @play.song_id } }, as: :json
    assert_response 200
  end

  test "should destroy play" do
    assert_difference('Play.count', -1) do
      delete play_url(@play), as: :json
    end

    assert_response 204
  end
end
