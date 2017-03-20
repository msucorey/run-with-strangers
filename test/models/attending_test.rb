# == Schema Information
#
# Table name: attendings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  status     :string
#

require 'test_helper'

class AttendingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
