class ScalarTypes::DateTime < GraphQL::Schema::Scalar
  description '日付型'

  def self.coerce_input(value, _context)
    Time.zone.parse(value)
  end

  def self.coerce_result(value, _context)
    I18n.l(value, format: :to_date)
  end
end