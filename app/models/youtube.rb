# All this code was used for the jQuery way of doing the Live Search. The form would automatically submit after a timeout of the last keystroke. I am now using AJAX to handle the live search and no longer need this code. Keeping it for reference.

class Youtube
  attr_accessor :search #, :title, :description, :image, :videos

  def initialize(search)
    self.search = search

    # json_response = fetch_videos(search)
    # puts JSON.pretty_generate(json_response)                          # THIS IS AWESOME. IT PRINTS OUT JSON ALL FORMATTED, OMGGGG
    # show_videos(json_response)
    # video_information
  end

  # def fetch_videos(search)
  #   converted_query = search.squish.downcase.tr(" ", "_")             # Removes the spaces from the search query
  #   HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=#{converted_query}&type=video&key=" + ENV['YOUTUBE_API_KEY'] + "&part=snippet,contentDetails,statistics,status")
  # end

  # def show_videos(json_response)
  #   @videos = []
  #   json_response['items'].each do |video|
  #     @videos << video
  #   end
  # end

  # def video_information                                             # Still want to use this, not sure how right not
  #   @videos.each do |video|
  #     self.title = video['snippet']['title']
  #     self.description = video['snippet']['description']
  #     self.image = video['snippet']['thumbnails']['high']['url']
  #   end
  # end
end

