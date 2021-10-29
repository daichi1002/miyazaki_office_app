module Mutations
  class CreateHistory < BaseMutation
    graphql_name 'CreateHistory'
    field :history, [Types::HistoryType], null: true
    field :result, Boolean, null: true

    # argument :history, [String], required: false
    argument :user_id, ID, required: false
    argument :title, String, required: false
    argument :purchase_at, String, required: false

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
