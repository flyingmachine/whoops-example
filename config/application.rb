require File.expand_path('../boot', __FILE__)

require "action_controller/railtie"
require "action_view/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"

if defined?(Bundler)
  Bundler.require(*Rails.groups(:assets => %w(development test)))
end

module WhoopsServer
  class Application < Rails::Application
    config.encoding = "utf-8"
    config.assets.enabled = true
    config.filter_parameters += [:password]
  end
end
