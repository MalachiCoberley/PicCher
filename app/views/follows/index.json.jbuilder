@follows.each do |follow|
  json.set! follow.id do
    json.partial! 'follows', follow: follow
  end
end
