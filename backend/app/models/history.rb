
class History <  ApplicationRecord
  belongs_to :user, optional: true
  has_many :history_details
end