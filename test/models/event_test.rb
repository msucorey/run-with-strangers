# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  details    :string           not null
#  address    :string           not null
#  date       :date             not null
#  time       :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
