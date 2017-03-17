# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  is_major   :boolean          not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord

  validates :name, :is_major, presence: true

  has_many :users

end
