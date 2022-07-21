# RestaurantReviewApp

# View All Restaurants
/restaurants 

# View Cuisine
/restaurants/cuisines  
  
# View Specific Restaurant
/restaurants/id/5eb3d668b31de5d588f4292d    

# Review Crud

# POST   Add Review 
/restaurants/review   
# Json    
   {
  "restaurant_id":"5eb3d668b31de5d588f4292d",
  "text":"IDK may be 5 star",
  "user_id":999,
  "name":"Yasir"
  }

# PUT    Update Review
/restaurants/review  
# Json
{
  "review_id":"5eb3d668b31de5d588f4292d",
  "text":"IDK may be 5 star",
  "user_id":999,
  "name":"Yasir"
} 

# DELETE     Delete Review
/restaurants/review?id=62d95153f8e9b2453c207d12    
# Json 
{
  "id":"62d95153f8e9b2453c207d12",
  "user_id":999
}