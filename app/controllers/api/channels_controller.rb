class Api::ChannelsController < ApplicationController

  def index
    user_id = current_user.id
    user = User.find_by(id: user_id)
    @channels = user.channels #i get through the has_many association
    render "api/channels/index"
  end

  def create
      debugger 
      @channel = Channel.new(channel_params)
      user_ids = params[:channel][:user_ids]
      if @channel.save
        user_ids.each { |user_id| Membership.create(channel_id: @channel.id, user_id: user_id) }
        render "api/channels/index"
      else
        render json: @channel.errors.full_messages, status: 422
      end
  end

  # def show
  #   channel = Channel.find_by(name: channel_params[:name])
  #   @messages = channel.messages
  #   render "api/channels/show"
  # end

  def destroy

  end


  def channel_params
    params.require(:channel).permit(:name, :private)
  end

end
