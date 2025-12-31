"use server";

import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const user = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  // getCartItem--> user.email && productId
  const query = { email: user?.email, productId: product?._id };

  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    // if exist: update cart

    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };

    const result = await cartCollection.updateOne(query, updatedData);

    return { success: Boolean(result.modifiedCount) };
  } else {
    // if not exist: insert cart
    const newData = {
      productId: product?._id,
      email: user?.email,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * product.discount) / 100,
      username: user?.name,
    };

    console.log(user)

    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };
  }
};
