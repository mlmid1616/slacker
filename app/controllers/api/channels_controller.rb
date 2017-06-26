class Api::ChannelsController < ApplicationController

  def index
    user_id = current_user.id
    user = User.find_by(id: user_id)
    @channels = user.channels #i get through the has_many association
    render "api/channels/index"
  end

  def create

      @channel = Channel.new(channel_params)
      user_ids = params[:channel][:user_ids]
      if @channel.save
        user_ids.each { |user_id| Membership.create(channel_id: @channel.id, user_id: user_id) }
        render "api/channels/index"
      else
        render json: @channel.errors.full_messages, status: 422
      end
  end

  def show
    
    @channel = Channel.find_by(id: channel_params[:channel])
    if @channel
       
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy

  end


  def channel_params
    params.require(:channel).permit(:name, :private, :user_ids, :channel_id)
  end

end
