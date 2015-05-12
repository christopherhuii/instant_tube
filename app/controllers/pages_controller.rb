class PagesController < ApplicationController
  def index
    @search_query = Youtube.new(params[:search] ||= " ")
  end
end
