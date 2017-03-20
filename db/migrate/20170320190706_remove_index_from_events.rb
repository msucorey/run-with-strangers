class RemoveIndexFromEvents < ActiveRecord::Migration[5.0]
  def change
  end
  remove_index :events, column: :host_id
end
