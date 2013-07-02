Refinery Blog :
Advanced settings --> Source Url = /blog

Engines must first be generated : rails g engines:[name of engine]

To install a gem:
1. gem install [name of gem]
2. bundle install
3. edit Gemfile

<% content_for :body_content_right do %>
  <ul id='gallery'>
      <% @page.images.each do |image| %>
            <li>
                    <%= link_to image_tag(image.thumbnail("200x200#c").url), image.thumbnail("900x600").url %>
                          </li>
                             <% end %>
                               </ul>
                               <% end %>
                               <%= render :partial => "/refinery/content_page" %>

To add/delete sections in pages: 
1. edit config/initializers/refinery/pages.rb
2. config.new_page_parts = true
