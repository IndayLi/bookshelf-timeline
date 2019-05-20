class Api::V1::ShelvesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def create
    
  end

end
