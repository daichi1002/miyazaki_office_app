module Mutations
  class CreateHistory < BaseMutation
    graphql_name 'CreateHistory'
    # field :history, [Types::HistoryType], null: true do
    #   argument :user_id, ID, required: false
    #   argument :title, String, required: false
    #   argument :purchase_at, String, required: false
    # end
    field :history, [Types::HistoryType], null: true
    field :result, Boolean, null: true

    argument :history, [Types::Attributes::HistoryInput], required: true
    # argument :user_id, ID, required: false
    # argument :title, String, required: false
    # argument :purchase_at, String, required: false

    def resolve(**args)
      args.each do |arg|
        history = History.create(user_id: arg[:user_id], title: arg[:title], purchase_at: arg[:purchase_at])
      {
        history: history,
        result: history.errors.blank?
      }
      end
    end
  end
end
