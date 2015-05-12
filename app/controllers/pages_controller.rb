class PagesController < ApplicationController
  def index
    @search_query = Youtube.new(params[:search] ||= "wefawefwafwaefwf") # used that ridiculous string to query 0 videos.
                                                                        # figure out better way later
  end
end
