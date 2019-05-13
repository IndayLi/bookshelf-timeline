class SessionsController < Devise::SessionsController
  protected

  def after_sign_in_path_for(resource)
    '/shelves'
  end

  def after_sign_out_path_for(resource)
    '/homes'
  end
   
end
