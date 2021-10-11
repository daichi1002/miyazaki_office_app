
class ItemMaster < ApplicationRecord
  has_many :inventory_details
  has_one :inventory
  validates :name, uniqueness: true
end