module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :histories, [Types::HistoriesTYPE], null: false
    def histories
      Histories.all
    end

    field :history_details, [Types::HistoryDetailsTYPE], null: false
    def history_details
      HistoryDetails.all
    end

    # TODO: remove me
    field :test_field, String, null: false,
                               description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
