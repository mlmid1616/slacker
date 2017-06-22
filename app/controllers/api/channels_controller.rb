class Api::ChannelsController < ApplicationController

  def index

    user_id = current_user.id
    user = User.find_by(id: user_id)
    @channels = user.channels #i get through the has_many association
    render "api/channels/index"
  end


  def channel_params
    params.require(:channel).permit(:name, :private)
  end

end
