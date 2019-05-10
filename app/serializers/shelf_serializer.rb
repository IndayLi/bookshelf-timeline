class ShelfSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description, :timestamp

  def timestamp
    object.created_at.strftime('%B %e, %Y')
  end
end
