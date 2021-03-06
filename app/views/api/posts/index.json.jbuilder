@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    json.photoUrl url_for(post.photo)
  end
end
