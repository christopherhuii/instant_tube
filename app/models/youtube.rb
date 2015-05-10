class Youtube
  attr_accessor :search

  def initialize(search)
    self.search = search

    json_response = fetch_videos(search)
    puts JSON.pretty_generate(json_response) # THIS IS AWESOME. IT PRINTS OUT JSON ALL INDENTED AND STUFF, OMGGGG
  end

  def fetch_videos(search)
    HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=#{search}&type=video&key=" + ENV['YOUTUBE_API_KEY'] + "&part=snippet,contentDetails,statistics,status")
  end
end

