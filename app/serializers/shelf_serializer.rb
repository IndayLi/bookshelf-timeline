class ShelfSerializer < ActiveModel::Serializer
  attributes :id, :user_data, :book, :timestamp

  def timestamp
    object.created_at.strftime('%B %e, %Y')
  end

  def user_data
    {first_name: object.user.first_name, email: object.user.email, image_url: object.user.image_url}
  end

end
