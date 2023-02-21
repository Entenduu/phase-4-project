# Airbnb Connect Apprenticeship Code Sample
# Ruby on Rails

# Controller for Topic Model

class TopicsController < ApplicationController
  before_action :set_topic, only: %i[ show update destroy ]

  # GET request function for all topics /topics
  def index
    @topics = Topic.all

    render json: @topics
  end

  # GET request function for select topic /topics/1
  def show
    render json: @topic
  end

  # POST request function for all topics /topics
  def create
    @topic = Topic.new(topic_params)
  # Error handling statements
    if @topic.save
      render json: @topic, status: :created, location: @topic
    else
      render json: @topic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT function /topics/1
  def update
    if @topic.update(topic_params)
      render json: @topic
    else
      render json: @topic.errors, status: :unprocessable_entity
    end
  end

  # DELETE request function for select topic /topics/1
  def destroy
    @topic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def topic_params
      params.permit(:title, :genre, :post_id)
    end
end
