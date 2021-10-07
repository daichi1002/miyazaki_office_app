module Types
  class HistoryType < Types::BaseObject
    #テーブルの内容
    field :id, ID, null: false
    field :user_id, ID, null: false
    field :title, String, null: false
    field :purchase_at, GraphQL::Types::ISO8601DateTime, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    #アソシエーションの情報

    field :history_details, [Types::HistoryDetailType], null: false
    field :history_details_object_count, Integer, null: false

    #ほしいデータを取得するメソッド

    def history_details_object_count
      object.history_details.count
    end

  end
end
