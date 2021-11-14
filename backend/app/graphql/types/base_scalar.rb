  class Types::DateTime < GraphQL::Schema::Scalar
  #     coerce_input ->(value, _ctx) { Time.zone.parse(value) }
  #     coerce_result ->(value, _ctx) { value.utc.strftime("%Y/%m/%d") }
  end
