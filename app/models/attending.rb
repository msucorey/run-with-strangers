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

class Attending < ApplicationRecord

  validates :user_id, :event_id, presence: true

  belongs_to :user
  belongs_to :event

end
