class Api::EventsController < ApplicationController

  def index
    @events = City.find(params[:city_id]).events
    render "api/events/index"
  end

  def show
    @event = Event.find(params[:id])
    render "api/events/show"
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update
      render "api/events/show"
    else
      render json: ["Update unsuccessful"], status: 401
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      render "api/events/show"
    else
      render json: ["Destruction unsuccessful"], status: 401
    end
  end

  private

  def event_params
    params.require(:event).permit(:host_id, :details, :address, :date, :time)
  end

end
