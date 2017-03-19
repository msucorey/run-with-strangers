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

  validates :details, :address, :date, :time, presnece: true

  belongs_to :host
  
end
