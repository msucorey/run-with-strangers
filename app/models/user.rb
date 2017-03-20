# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  city_id         :integer
#  is_host         :boolean
#  host_image_url  :string
#  host_intro      :text
#  facebook_url    :string
#  twitter_url     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  after_initialize :ensure_session_token
  # before_validation :ensure_session_token_uniqueness

  belongs_to :city, optional: true
  has_many :events,
    foreign_key: :host_id
  has_many :attendings
  has_many :run_dates,
    through: :attendings,
    source: :event

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    # ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  # def ensure_session_token_uniqueness
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = new_session_token
  #   end
  # end

end
