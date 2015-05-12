class PagesController < ApplicationController
  def index
    @videos = Youtube.new(params[:search] ||= " ")


  end
end
