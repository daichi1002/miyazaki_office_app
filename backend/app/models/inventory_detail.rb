class InventoryDetail < ApplicationRecord
  belongs_to :item_master, optional: true, touch: true
end
