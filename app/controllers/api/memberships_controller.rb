class Api::MembershipsController < ApplicationController

  def create
    @channel = Channel.create(name: params[:channel][:name],
    private:params[:channel][:secret])
    arr = params[:user_ids].split(",")

    arr.each do |user_id|
      Membership.create(user_id: user_id, channel_id: @channel.id)
    end
    render "api/memberships/show"
  end





end

# user_id: user_id, channel_id: @channel.id)
