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

class Event < ApplicationRecord

  validates :details, :address, :date, :time, :host_id, presence: true

  belongs_to :user,
    foreign_key: :host_id,
    class_name: "User"

  has_one :city,
    through: :user

  has_many :attendees,
    through: :attendings,
    source: :user

end
