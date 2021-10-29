module Mutations
  class CreateHistoryDetail < BaseMutation
    graphql_name 'CreateHistoryDetail'
    field :history_detail, Types::HistoryDetailType, null: true

    argument :history_id, ID, required: false
    argument :content, String, required: false
    argument :price, Integer, required: false

    def resolve(**args)
      history_detail = HistoryDetail.create(history_id: args[:history_id], content: args[:content], price: args[:price])
      {
        history_detail: history_detail
      }
    end
  end
end
