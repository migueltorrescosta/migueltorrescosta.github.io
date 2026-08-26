# Monkey-patch Logger for Ruby 3.3 compatibility with Jekyll 3.x
class Logger
  def level
    @level_override[Fiber.current] || @level if @level_override
  end
end
