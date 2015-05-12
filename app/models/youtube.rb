class Youtube
  attr_accessor :search, :title, :description, :image, :videos

  def initialize(search)
    self.search = search

    json_response = fetch_videos(search)
    puts JSON.pretty_generate(json_response) # THIS IS AWESOME. IT PRINTS OUT JSON ALL INDENTED AND STUFF, OMGGGG
    show_videos(json_response)
    video_information
  end

  def fetch_videos(search)
    converted_query = search.squish.downcase.tr(" ", "_")
    HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=#{converted_query}&type=video&key=" + ENV['YOUTUBE_API_KEY'] + "&part=snippet,contentDetails,statistics,status")
  end

  def show_videos(json_response)
    @videos = []
    json_response['items'].each do |video|
      @videos << video
    end
  end

  def video_information
    @videos.each do |video|
      self.title = video['snippet']['title']
      self.description = video['snippet']['description']
      self.image = video['snippet']['thumbnails']['high']['url']
    end
  end
end

