class Api::MessagesController < ApplicationController

  def index
    channel = Channel.find_by(id: params[:channel])
    @messages = channel.messages
    render "api/messages/index"
  end

  def show
    @message = Message.find(params[:id])
  end

  def create
    @message = Message.new(message_params)
    channel = @message.channel
    if @message.save
      Pusher.trigger('channel_' + channel.id.to_s, 'message_published', {})
      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 422
    end

  end

  def update
    @message = Message.find_by(id: params[:id])
    if @message.update_attributes(message_params)
      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    if @message
      @message.destroy
      render json: @message.id
    else
      render(
        json: ["Message not found"],
        status: 404
        )
    end
  end

  def message_params
    params.require(:message).permit(:content, :user_id, :channel_id)
  end
end
