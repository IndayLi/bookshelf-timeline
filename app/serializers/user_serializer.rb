class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :timestamp, :image_url

  def timestamp
    object.created_at.strftime('%B %e, %Y')
  end

end
