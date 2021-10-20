module Mutations
  class UpdateInventory < BaseMutation

    argument :id, ID, required: true
    field :inventory, Types::InventoryType, null: false

    def resolve(id:)
      inventory = Inventory.find(id)
      inventory.update(stock: inventory.stock - 1 )
      {
        inventory: inventory,
        result: inventory.errors.blank?
      }
    end

  end
end
