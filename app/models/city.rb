# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord

  validates :name, presence: true

  has_many :users

  has_many :events,
    through: :users

end
