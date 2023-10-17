# ShopTrackr

This API provides endpoints to manage products, categories, tags, and their associations in an e-commerce application.

## Prerequisites

- Node.js and npm installed on your machine.
- SQl server running locally.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd ShopTrackr
   ```

3. Install dependencies:

   ```bash
   npm install
   ```


## Endpoints

### Tags

#### GET /tags

Retrieves all tags along with their associated product data.

#### GET /tags/:id

Retrieves a specific tag by its ID, along with its associated product data.

#### POST /tags

Creates a new tag. The request body should be in the following format:
```json
{
  "tag_name": "Sport"
}
```
#### PUT /tags/:id

Updates an existing tag's name by its ID.

#### DELETE /tags/:id

Deletes a tag by its ID.

### Products

#### GET /products

Retrieves all products along with their associated category and tag data.

#### GET /products/:id

Retrieves a specific product by its ID, along with its associated category and tag data.

#### POST /products

Creates a new product. The request body should be in the following format:
```json
{
  "product_name": "Basketball",
  "price": 200.00,
  "stock": 3,
  "tagIds": [1, 2, 3, 4]
}
```

#### PUT /products/:id

Updates an existing product by its ID.

#### DELETE /products/:id

Deletes a product by its ID

### Categories

#### GET /categories

Retrieves all categories along with their associated products.

#### GET /categories/:id

Retrieves a specific category by its ID, along with its associated products.

#### POST /categories

Creates a new category with the provided category name.

#### PUT /categories/:id

Updates an existing category with the provided category name, based on its ID.

#### DELETE /categories/:id

Deletes a category based on its ID.

## Video Demo

Video: https://drive.google.com/file/d/18Zn1wBvQcKuCha5_qW2IY5c54lXwBdPA/view
## Github

Github: https://github.com/jesk3r/ShopTrackr/
