class Api::RepliesController < ApplicationController


    def create
      @reply = Reply.new(reply_params)
      @reply.user_id = current_user.id
      if @reply.save
        render "api/replies/show", status: 200
      else
        render json: ["can't be added"], status: 422
      end
    end


    def index
      message = Message.find_by(id: params[:message_id])
      @replies = message.replies
      render "api/replies/index"
    end


    def reply_params
      params.require(:reply).permit(:content, :message_id, :user_id)
    end

end
