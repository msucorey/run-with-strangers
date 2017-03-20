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

  validates :user_id, :event_id, :status, presence: true

  belongs_to :user
  belongs_to :event

end

# validates :username, :email, :password_digest, :session_token, presence: true
# validates :email, uniqueness: true
# validates :password, length: { minimum: 6 }, allow_nil: :true
